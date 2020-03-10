import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

//pages
import LoginAdmin from '../pages/Login';
import Registration from '../pages/Registration';
import Admin from '../pages/Admin';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../components/Dashboard';

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginAdmin} />
                <Route path="/registration" component={Registration} />
                <Route path="/admin" component={Admin} />
                <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
        </BrowserRouter>
    );
}

export default MainRoute;
