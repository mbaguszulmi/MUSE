import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Brand2 from '../../assets/icons/brand2.png';

class TopBarCourse extends Component {
    render() {
        return (
            <div class='topbar-video'>
                <nav class="navbar navbar-expand-lg navbar-light topbar">
                    <img src={Brand2}></img>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul class="navbar-nav">
                            <div class="topbar-divider d-none d-sm-block"></div>
                            <li class="nav-item">
                                <a class="nav-link font-weight-bold text-white">Belajar Desain Aplikasi E-Banking</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/student/my-class" class="btn btn-outline-light pl-3 pr-3 mr-4"><i class="fas fa-angle-left mr-1"></i>Kembali</Link>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn-share-video btn btn-light pr-3 pl-3">Bagikan kelas</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopBarCourse;