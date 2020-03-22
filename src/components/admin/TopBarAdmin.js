import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DDUserInformation from '../../pages/admin/UserInformation';

class TopBar extends Component {
    render() {
        return (
            < nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >
                <ul class="navbar-nav ml-auto" >
                    <Notifications />
                    <Messages />
                    <div class="topbar-divider d-none d-sm-block"></div>
                </ul >
            </nav >
        );
    }
}

function Notifications() {
    return (
        < li class="nav-item dropdown no-arrow mx-1" >
            <Link to="/admin/notification" class="nav-link dropdown-toggle" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                {/* Counter - Alerts */}
                <span class="badge badge-danger badge-counter">3+</span>
            </Link>
        </li >
    );
}

function Messages() {
    return (
        < li class="nav-item dropdown no-arrow mx-1" >
            <Link to="/admin/message" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-envelope fa-fw"></i>
                {/* Counter - Messages */}
                <span class="badge badge-danger badge-counter">7</span>
            </Link>
        </li >
    );
}

function UserInformation() {
    return (
        <li class="nav-item dropdown no-arrow">
            <Link to="/admin/user-information" class="nav-link dropdown-toggle" id="userDropdown" data-toggle="modal" data-target="#modalAccount">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
            </Link>
            {/* Dropdown - User Information */}
            <DDUserInformation />
        </li>
    );
}

export default TopBar;