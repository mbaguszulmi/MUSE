import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Category from '../pages/student/class-collection/ClassCategory';
import Coding from '../pages/student/class-collection/ClassCoding';
import Design from '../pages/student/class-collection/ClassDesign';
import Multimedia from '../pages/student/class-collection/ClassMultimedia';


const ClassRouter = () => {
    return (
        <Switch>
            <Route exact path="/student/class-collection" component={Category}></Route>
            <Route path="/student/class-collection/coding" component={Coding}></Route>
            <Route path="/student/class-collection/design" component={Design}></Route>
            <Route path="/student/class-collection/multimedia" component={Multimedia}></Route>
        </Switch>
    );
}

export default ClassRouter;