import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuSidebar from '../../components/student/SidebarStudentMenu';
import Topbar from '../../components/student/TopBarStudent';
import SidebarRight from '../../components/student/SidebarClassRight';

import Icon1 from '../../assets/icons/icon-class.svg';

import MyClassRouter from '../../routes/myclass-route';

class MyClass extends Component {
    render() {
        return (
            <div class='my-class'>
                <MenuSidebar />
                <Topbar />
                <div class='content'>
                    <div class='header pr-3'>
                        <div class='row'>
                            <div class='col-lg-8'>
                                <div class='jumbotron ml-4'>
                                    <div class='row'>
                                        <div class='col-lg-8'>
                                            <h1>Selamat Datang Luna</h1>
                                            <p class="pt-3">kamu punya kelas aktif <span>Belajar UI/UX Pemula</span> dengan progress <span>25%</span>. Tetap semangat belajar ya!</p>
                                        </div>
                                        <div class='col-lg-4 text-right'>
                                            <img src={Icon1}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-lg-4'>
                                <SidebarRight />
                            </div>
                        </div>
                        <nav class="navbar navbar-expand-lg navbar-light ml-2">
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item mr-3">
                                        <Link to="/student/my-class" class="nav-link">Kelas aktif</Link>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <Link to="/student/my-class/in-progress" class="nav-link">Dalam proses</Link>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <Link to="/student/my-class/class-finished" class="nav-link">Kelas selesai</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/student/my-class/my-submission" class="nav-link">Submission Saya</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <MyClassRouter />
                </div>
            </div>
        );
    }
}

export default MyClass;