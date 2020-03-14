import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Settings from '../components/Settings';
import Management from '../components/Management';
import Payment from '../components/Payment';
import DropdownAccount from '../pages/Account';
import Message from '../components/Message';
import ContentMessage from '../components/Content-mes';
import Notification from '../components/Notification'

const AdminRouter = () => {
    return (
        <Switch>
            <Route exact path="/admin" component={Dashboard} />
            <Route path="/admin/settings" component={Settings} />
            <Route path="/admin/management" component={Management} />
            <Route path="/admin/payment" component={Payment} />
            <Route path="/admin/dd-account" component={DropdownAccount} />
            <Route path="/admin/message" component={Message} />
            <Route path="/admin/content-mes" component={ContentMessage} />
            <Route path="/admin/notification" component={Notification} />
        </Switch>
    );
}

export default AdminRouter;