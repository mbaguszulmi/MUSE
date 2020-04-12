import React from 'react';
import { Switch, Route } from 'react-router-dom';

// page student
import DetailVideo from '../pages/student/DetailVideo';
import ClassCollection from '../pages/student/ClassCollection';
import MyClass from '../pages/student/MyClass';


import ClassActive from '../pages/student/my-class/ClassActive';
import InProgress from '../pages/student/my-class/InProgress';
import ClassFinished from '../pages/student/my-class/ClassFinished';
import MySubmission from '../pages/student/my-class/MySubmission';

const StudentRouter = () => {
    return (
        <Switch>
            <Route exact path="/student" component={MyClass}></Route>
            <Route path="/student/detail-video" component={DetailVideo} />
            <Route path="/student/class-collection" component={ClassCollection} />
        </Switch>
    );
}

export default StudentRouter;