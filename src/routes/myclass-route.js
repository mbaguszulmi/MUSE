import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClassActive from '../pages/student/my-class/ClassActive';
import InProgress from '../pages/student/my-class/InProgress';
import ClassFinished from '../pages/student/my-class/ClassFinished';
import MySubmission from '../pages/student/my-class/MySubmission';

const MyClassRouter = () => {
    return (

        <Switch>
            <Route exact path="/student" component={ClassActive} />
            <Route path="/student/in-progress" component={InProgress} />
            <Route path="/student/class-finished" component={ClassFinished} />
            <Route path="/student/my-submission" component={MySubmission} />
        </Switch>

    );
}

export default MyClassRouter;