import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

//pages
import LoginAdmin from '../pages/Login';
import Registration from '../pages/Registration';
import Admin from '../pages/admin/Admin';
import ForgotPassword from '../pages/ForgotPassword';
import DetailVideo from '../pages/student/DetailVideo'

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginAdmin} />
                <Route path="/registration" component={Registration} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/admin" component={Admin} />
                <Route path="/student" component={DetailVideo} />
            </Switch>
        </BrowserRouter>
    );
}

export default MainRoute;

