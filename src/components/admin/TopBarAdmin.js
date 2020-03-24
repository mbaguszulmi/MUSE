import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import UserInformation from '../../pages/admin/UserInformation';

function ButtonUserInformation() {
    return (
        $('#user-drop').on('click', function () {
            console.log('ok');
        })
    )
}

class TopBar extends Component {
    render() {
        return (
            < nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >
                <ul class="navbar-nav ml-auto" >
                    <Notifications />
                    <Messages />
                    <div class="topbar-divider d-none d-sm-block"></div>
                    <BtnUserInformation />
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

function BtnUserInformation() {
    $('#user-information').on('click', function () {
        $('.drop-user').addClass('aktif');
    })
    $('.drop-user.aktif').on('click', function () {
        console.log('ok');
    });
    return (
        <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="#" id="user-information" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
            </a>
            <UserInformation />
        </li>
    );
}

export default TopBar;