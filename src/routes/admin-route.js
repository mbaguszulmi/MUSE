import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Settings from '../components/Settings';
import Management from '../components/Management';
import Payment from '../components/Payment';

const AdminRouter = () => {
    return (
        <Switch>
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/settings" component={Settings} />
            <Route path="/admin/management" component={Management} />
            <Route path="/admin/payment" component={Payment} />
        </Switch>
    );
}

export default AdminRouter;