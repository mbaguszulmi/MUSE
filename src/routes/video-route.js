import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import AboutClass from '../pages/student/course/AboutClass';
import ChatMentor from '../pages/student/course/ChatMentor';
import ForumClass from '../pages/student/course/ForumClass';
import FileAttachement from '../pages/student/course/FileAttachement';

const VideoRouter = () => {
    return (
        <Switch>
            <Route exact path="/student/course" component={AboutClass} />
            <Route path="/student/course/chat-mentor" component={ChatMentor} />
            <Route path="/student/course/forum-class" component={ForumClass} />
            <Route path="/student/course/file-attachement" component={FileAttachement} />
        </Switch>
    );
}

export default VideoRouter;