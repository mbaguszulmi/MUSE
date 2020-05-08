import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClassActive from '../pages/student/my-class/ClassActive';
import InProgress from '../pages/student/my-class/InProgress';
import ClassFinished from '../pages/student/my-class/ClassFinished';
import MySubmission from '../pages/student/my-class/MySubmission';

const MyClassRouter = () => {
    return (

        <Switch>
            <Route exact path="/student/my-class" component={ClassActive}></Route>
            <Route path="/student/my-class/in-progress" component={InProgress}></Route>
            <Route path="/student/my-class/class-finished" component={ClassFinished}></Route>
            <Route path="/student/my-class/my-submission" component={MySubmission}></Route>
        </Switch>

    );
}

export default MyClassRouter;