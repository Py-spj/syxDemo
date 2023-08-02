import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
type ProtectedRoute = {
    isPublic?:boolean;//用于判断当前路由是否应该受到保护。
    isAuthorized?:boolean//用于告诉用户是否有一个有效的JWT
}
//父路由元素中应使用<Outlet>来渲染其子路由元素
const ProtectedRoute = ({ isPublic, isAuthorized }:ProtectedRoute) => {
    return (isPublic || isAuthorized) ? <Outlet /> : <Navigate to='/login' />
}
export default ProtectedRoute;