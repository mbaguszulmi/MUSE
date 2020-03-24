import React from 'react';
import { Switch, Route } from 'react-router-dom';

// page student
import DetailVideo from '../pages/student/DetailVideo';

const StudentRouter = () => {
    return (
        <Switch>
            <Route path="/student/detail-video" component={DetailVideo} />
        </Switch>
    );
}

export default StudentRouter;