// Layouts
import AnonymousLayout from "../AnonymousLayout";
import MainLayout from "../MainLayout";

// Pages
import Login from "../../pages/login";
import Home from "../../pages/home";
import List from "../../pages/list";
import Detail from "../../pages/detail";
import renderRoutes from "./generate-routes";
import {Navigate} from "react-router-dom";

export const routes = [
    {
        layout: AnonymousLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: <Login />,
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
                component: <Navigate to="/home"/>,
            },
            {
                name: 'home',
                title: 'Home page',
                component: <Home />,
                path: '/home'
            },
            {
                name: 'users',
                title: 'users',
                hasSiderLink: true,//表示目标路由是否应该被呈现为侧边栏的导航链接。当设置为true时，该路由将出现在侧边栏内
                routes: [
                    {
                        name: 'list',
                        title: 'List',
                        hasSiderLink: true,
                        component: <List />,
                        path: '/users/list'
                    },
                    {
                        name: 'detail',
                        title: 'detail',
                        hasSiderLink: true,
                        component: <Detail />,
                        path: '/users/detail'
                    }
                ]
            }
        ]
    }
];

export const Routes = renderRoutes(routes)