import React from 'react';
import { Switch, Route } from 'react-router-dom';

// page student
import MyClass from '../pages/student/MyClass';
import Course from '../pages/student/Course';
import ClassCollection from '../pages/student/ClassCollection';
import StatisticsCourse from '../pages/student/StatisticsCourse';
import Portfolio from '../pages/student/Portfolio';
import Certificate from '../pages/student/Certificate';
import EditProfile from '../pages/student/EditProfile';
import Checkout from '../pages/student/Checkout';

const StudentRouter = () => {
    return (
        <Switch>
            <Route path="/student/my-class" component={MyClass}></Route>
            <Route path="/student/statistics-course" component={StatisticsCourse}></Route>
            <Route path="/student/portfolio" component={Portfolio}></Route>
            <Route path="/student/certificate" component={Certificate}></Route>
            <Route path="/student/edit-profile" component={EditProfile}></Route>
            <Route path="/student/course" component={Course} />
            <Route path="/student/class-collection" component={ClassCollection} />
            <Route path="/student/checkout" component={Checkout} />
        </Switch>
    );
}

export default StudentRouter;