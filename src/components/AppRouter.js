import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Admin from "../pages/Admin"
import DevicePage from "../pages/DevicePage";
import Auth from "../pages/Auth";
import Shop from "../pages/Shop";
const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {/*{user.isAuth && authRoutes.map(({path, Component}) => {*/}
            {/*    return <Route key={path} path={path} element={Component}/>*/}
            {/*})*/}
            {/*{!user.isAuth && publicRoutes.map(({path, Component}) => {*/}
            {/*     return <Route key={path} path={path} element={Component}/>*/}
            {/*})}*/}

            <Route path={ADMIN_ROUTE} element={user.isAuth ? (
                <DevicePage />
            ) : (
                <Navigate replace to={"/"} />
            )}/>
            <Route path={BASKET_ROUTE} element={user.isAuth ? (
                <DevicePage />
            ) : (
                <Navigate replace to={"/"} />
            )}/>
            <Route path={SHOP_ROUTE} element={
                <Shop />
            }/>
            <Route path={LOGIN_ROUTE} element={ (
                <Auth />
            ) }/>
            <Route path={REGISTRATION_ROUTE} element={ (
                <Auth />
            ) }/>
            <Route path={DEVICE_ROUTE + '/:id'} element={
                <DevicePage />
            }/>

            <Route path="*" element={SHOP_ROUTE}/>
        </Routes>
    );
});

export default AppRouter;