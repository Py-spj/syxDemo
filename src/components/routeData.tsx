import { CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons";
import Home from "../pages/home";
import ReactDnd from "../pages/reactDnd";
import List from "../pages/list";
import Detail from "../pages/detail";
import { Navigate } from "react-router-dom";
const Redirect = () => {
  return <Navigate to="/home" />;
};
export const routesData = [
  {
    path: "/",
    // name: 'demo',
    // icon: <SmileFilled />,
    key: "0",
    component: Redirect,
  },
  {
    path: "/home",
    name: "主页",
    key: "1",
    icon: <SmileFilled />,
    component: Home,
  },
  {
    path: "/reactDnd",
    name: "reactDnd",
    key: "2",
    icon: <CrownFilled />,
    component: ReactDnd,
  },
  {
    name: "列表",
    icon: <TabletFilled />,
    key: "3",
    path: "/list",
    routes: [
      {
        path: "/list",
        name: "列表",
        key: "4",
        icon: <CrownFilled />,
        component: List,
      },
      {
        path: "/list/detail",
        name: "详情",
        key: "5",
        icon: <CrownFilled />,
        component: Detail,
      },
    ],
  },
];
