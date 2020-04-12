import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

//pages
import LoginAdmin from '../pages/Login';
import Registration from '../pages/Registration';
import Admin from '../pages/Admin';
import ForgotPassword from '../pages/ForgotPassword';
import Student from '../pages/Student'

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginAdmin} />
                <Route path="/registration" component={Registration} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/admin" component={Admin} />
                <Route path="/student" component={Student} />
            </Switch>
        </BrowserRouter>
    );
}

export default MainRoute;

