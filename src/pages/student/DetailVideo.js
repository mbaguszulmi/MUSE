import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopBarStudent from '../../components/student/TopBarStudent';
import SideBarStudent from '../../components/student/SideBarStudent';
import VideoRouter from '../../routes/video-route';

class DetailVideo extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="detail-video d-flex flex-column">
                    <div class="header">
                        <TopBarStudent />
                    </div>
                    <div class="content p-4">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="jumbotron mr-n5"></div>
                                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item mr-3">
                                                <Link to="/student/detail-video" class="nav-link">Tentang Kelas</Link>
                                            </li>
                                            <li class="nav-item mr-3 active border-bottom-dark">
                                                <Link to="/student/detail-video/chat-mentor" class="nav-link">Chat Mentor</Link>
                                            </li>
                                            <li class="nav-item mr-3">
                                                <Link to="/student/detail-video/forum-class" class="nav-link">Forum Kelas</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/student/detail-video/file-attachement" class="nav-link">File Terlampir</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <VideoRouter />
                            </div>
                            <div class="col-lg-3 sidebar">
                                <SideBarStudent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailVideo;