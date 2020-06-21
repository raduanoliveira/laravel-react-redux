import '../components/template/dependencies.js'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/bootstrap/dist/js/bootstrap.min.js'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../components/template/styles/style.css'

import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { ProtectedRoute } from '../components/common/router/protected'


import RouteLogin from '../pages/Login/routeLogin'
import RouteHome from '../pages/Home/routeHome'
import RouteBillingCycle from '../pages/BillingCycle/routeBillingCycle'
import RouteRegister from '../pages/Register/routeRegister'
import RouteProfile from '../pages/Profile/routeProfile'
import RouteManageUsers from '../pages/Manage/ManageUser/routeManageUsers'

import App from './app'


const guestRoutes = [
    { path: '/', component: RouteLogin, exact: true },
    { path: '/register', component: RouteRegister, exact: true }
]

const protectedRoutes = [
    { path: '/home', component: RouteHome, exact: true },
    { path: '/billingcycle', component: RouteBillingCycle, exact: true },
    { path: '/profile', component: RouteProfile, exact: true },
    { path: '/manageUsers', component: RouteManageUsers, exact: true }
]

class Routes extends Component {

    render() {

        return (
            <BrowserRouter>

                <Switch>
                    {guestRoutes.map((route, key) => {
                        return (
                            <Route exact={route.exact} path={route.path} component={route.component} key={key} />
                        )
                    })}

                    <App>

                        {protectedRoutes.map((route, key) => {
                            return (
                                <ProtectedRoute exact={route.exact} path={route.path} component={route.component} key={key} />
                            )
                        })}
                    </App>

                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        )
    }

}
export default Routes