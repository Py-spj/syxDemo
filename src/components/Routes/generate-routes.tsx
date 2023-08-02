import React from 'react';
import flattenDeep from 'lodash/flattenDeep'
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const generateFlattenRoutes = (routes: { [x: string]: any; routes: any; }[]):any[] => {
     if (!routes ) return []
    return flattenDeep(routes.map(({routes: subRoutes,...rest})=>{
        return [rest,generateFlattenRoutes(subRoutes)]
    }))
}
 const renderRoutes = (mainRoutes:any[]) => {
    const Routes = ({isAuthorized}:{isAuthorized:boolean}) => {
        const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
            const subRoutes = generateFlattenRoutes(routes);
            return (
                <Route key={index} element={<Layout />}>
                    <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
                        {subRoutes.map(({ component: Component, path, name }) => {
                            return (
                                Component && path && (<Route key={name} element={Component} path={path} />)

                            )
                        })}
                    </Route>
                </Route>
            )
        });
        return <ReactRoutes>{layouts}</ReactRoutes>;
    }
    return Routes;
}

export default renderRoutes