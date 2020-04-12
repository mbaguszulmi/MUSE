import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import AboutClass from '../pages/student/detail-video/AboutClass';
import ChatMentor from '../pages/student/detail-video/ChatMentor';
import ForumClass from '../pages/student/detail-video/ForumClass';
import FileAttachement from '../pages/student/detail-video/FileAttachement';

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