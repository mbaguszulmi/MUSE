import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/admin/paginations/Dashboard';
import Settings from '../pages/admin/paginations/Settings';
import Management from '../pages/admin/paginations/Management';
import Payment from '../pages/admin/paginations/Payment';
import Message from '../pages/admin/paginations/Message';
import ContentMessage from '../pages/admin/ContentMesage';
import Notification from '../pages/admin/paginations/Notification';

const AdminRouter = () => {
    return (
        <Switch>
            <Route exact path="/admin" component={Dashboard} />
            <Route path="/admin/settings" component={Settings} />
            <Route path="/admin/management" component={Management} />
            <Route path="/admin/payment" component={Payment} />
            <Route path="/admin/message" component={Message} />
            <Route path="/admin/content-mes" component={ContentMessage} />
            <Route path="/admin/notification" component={Notification} />
        </Switch>
    );
}

export default AdminRouter;