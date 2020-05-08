import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

import TopBarCourse from '../../components/student/TopBarCourse';
import SidebarVideoRight from '../../components/student/SidebarVideoRight';
import VideoRouter from '../../routes/video-route';

// image
// import ExampleVideo from 'https://www.youtube.com/watch?v=PrA0BUEU1RM';

class Course extends Component {
    render() {
        return (
            <div class="detail-video d-flex flex-column">
                <div class="header">
                    <TopBarCourse />
                </div>
                <div class="content p-4">
                    <div class="row">
                        <div class="col-lg-9">
                            <YouTube videoId="PrA0BUEU1RM" opts={{ width: '100%', height: '480px' }}></YouTube>
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item mr-3">
                                            <Link to="/student/course" class="nav-link">Tentang Kelas</Link>
                                        </li>
                                        <li class="nav-item mr-3">
                                            <Link to="/student/course/chat-mentor" class="nav-link">Chat Mentor</Link>
                                        </li>
                                        <li class="nav-item mr-3">
                                            <Link to="/student/course/forum-class" class="nav-link">Forum Kelas</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/student/course/file-attachement" class="nav-link">File Terlampir</Link>
                                        </li>
                                    </ul>
                                </div>
                                <small>
                                    <Link to='#' class="favorite text-decoration-none"> <i class='far fa-heart' /> Faforitkan kelas </Link>
                                </small>
                            </nav>
                            <VideoRouter />
                        </div>
                        <div class="col-lg-3">
                            <SidebarVideoRight />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Course;