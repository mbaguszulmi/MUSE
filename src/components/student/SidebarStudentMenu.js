import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Brand from '../../assets/icons/brand.svg';

class SidebarStudentMenu extends Component {
    render() {
        return (
            <div class='sidebar-menu position-fixed'>
                <ul class="navbar-nav p-3">

                    <Link to="#" class="mb-3"><img src={Brand}></img></Link>

                    <div class="font-weight-bold mt-4">
                        Menu Utama
                    </div>

                    <li class="nav-item">
                        <Link class="nav-link" to="/student/my-class">
                            <i class="fas fa-fw fa-book-open"></i>
                            <span>Kelasku</span></Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/student/class-collection">
                            <i class="fas fa-fw fa-book"></i>
                            <span>Koleksi kelas</span></Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/student/statistics-course">
                            <i class="fas fa-fw fa-chart-bar"></i>
                            <span>Statistik belajar</span></Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/student/portfolio">
                            <i class="fas fa-fw fa-file-alt"></i>
                            <span>Portfolio</span></Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/student/certificate">
                            <i class="fas fa-fw fa-award"></i>
                            <span>Sertifikat</span></Link>
                    </li>

                    <div class="font-weight-bold mt-4">
                        Akun Saya
                    </div>

                    <li class="nav-item">
                        <Link class="nav-link" to="/student/edit-profile">
                            <i class="fas fa-fw fa-edit"></i>
                            <span>Edit profile</span></Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/">
                            <i class="fas fa-fw fa-sign-out-alt"></i>
                            <span>Keluar</span></Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default SidebarStudentMenu;