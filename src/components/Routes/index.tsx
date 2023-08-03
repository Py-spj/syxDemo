// Layouts
import AnonymousLayout from "../AnonymousLayout";
import MainLayout from "../MainLayout";

// Pages
import Login from "../../pages/login";
import Home from "../../pages/home";
import List from "../../pages/list";
import ReactDnd from "../../pages/reactDnd";
import renderRoutes from "./generate-routes";
import {Navigate} from "react-router-dom";
import Detail from "../../pages/detail";
const Redirect = ()=>{
    return  <Navigate to="/home"/>
}
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
        routes: [
             {
                name: 'home',
                title: 'Home page',
                path: '/',
                component: Redirect,
            },
            {
                name: 'home',
                title: 'Home page',
                component: Home,
                path: '/home'
            },
            {
                name: 'reactDnd',
                title: 'reactDnd',
                component: ReactDnd,
                path: '/reactDnd'
            },
            {
                name: 'list',
                title: 'List',
                hasSiderLink: true,
                component: List,
                routes: [
                    {
                        name: 'detail',
                        title: 'detail',
                        hasSiderLink: true,
                        component: Detail,
                        path: '/list/detail'
                    },
                ]
            }
        ]
    }
];

export const Routes = renderRoutes(routes)