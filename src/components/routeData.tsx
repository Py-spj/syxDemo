import {CrownFilled, SmileFilled, TabletFilled} from "@ant-design/icons";
import Home from "../pages/home";
import ReactDnd from "../pages/reactDnd";
import List from "../pages/list";
import Detail from "../pages/detail";
import {Navigate} from "_react-router-dom@6.14.2@react-router-dom";
const Redirect = ()=>{
    return  <Navigate to="/home"/>
}
export  const routesData =  [
    {
        path: '/',
        // name: 'demo',
        // icon: <SmileFilled />,
        component: Redirect,
    },
    {
        path: '/home',
        name: '主页',
        icon: <SmileFilled />,
        component: Home,
    },
    {
        path: '/reactDnd',
        name: 'reactDnd',
        icon: <CrownFilled />,
        component: ReactDnd,
    },
    {
        name: '列表',
        icon: <TabletFilled />,
        path: '/list',
        routes: [
            {
                path: '/list/list',
                name: '列表',
                icon: <CrownFilled />,
                component: List,            },
            {
                path: '/list/detail',
                name: '详情',
                icon: <CrownFilled />,
                component: Detail,
            }
        ],
    },
]