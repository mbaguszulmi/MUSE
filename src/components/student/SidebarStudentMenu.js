import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Brand from '../../assets/icons/brand.svg';

class SidebarStudentMenu extends Component {
    render() {
        return (
            <div class='sidebar-menu position-fixed'>
                <ul class="navbar-nav p-3">

                    <a href="#" class="mb-3"><img src={Brand}></img></a>

                    <hr class="sidebar-divider" />

                    <div class="font-weight-bold">
                        Menu Utama
                    </div>

                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            <i class="fas fa-fw fa-book-open"></i>
                            <span>Kelasku</span></a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            <i class="fas fa-fw fa-chart-bar"></i>
                            <span>Statistik belajar</span></a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            <i class="fas fa-fw fa-file-alt"></i>
                            <span>Portfolio</span></a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            <i class="fas fa-fw fa-award"></i>
                            <span>Sertifikat</span></a>
                    </li>

                    <hr class="sidebar-divider" />

                    <div class="font-weight-bold">
                        Akun Saya
                    </div>

                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            <i class="fas fa-fw fa-edit"></i>
                            <span>Edit profile</span></a>
                    </li>

                    <li class="nav-item active">
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