// Layouts
import AnonymousLayout from "../AnonymousLayout";
import MainLayout from "../MainLayout";
// Pages
import Login from "../../pages/login";
import renderRoutes from "./generate-routes";
import {routesData} from "../routeData";
export const routes = [
    {
        layout: AnonymousLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: Login,
                path: '/login',
                isPublic: true,//: 一个Boolean prop，表示该页面是公开的还是需要登录的。当设置为 "true "时，该页面将以匿名模式访问
            }
        ]
    },
    {
        layout: MainLayout,
        routes: routesData
    }
];

export const Routes = renderRoutes(routes)