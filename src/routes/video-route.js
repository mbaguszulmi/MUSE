import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// pages
import AboutClass from '../pages/student/AboutClass';
import ChatMentor from '../pages/student/ChatMentor';
import ForumClass from '../pages/student/ForumClass';
import FileAttachement from '../pages/student/FileAttachement';

const VideoRouter = () => {
    return (
        <Switch>
            <Route exact path="/student/detail-video" component={AboutClass} />
            <Route path="/student/detail-video/chat-mentor" component={ChatMentor} />
            <Route path="/student/detail-video/forum-class" component={ForumClass} />
            <Route path="/student/detail-video/file-attachement" component={FileAttachement} />
        </Switch>
    );
}

export default VideoRouter;