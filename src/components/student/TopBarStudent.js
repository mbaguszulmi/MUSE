import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import UserInformation from '../../pages/admin/UserInformation';

class TopBarStudent extends Component {
    render() {
        return (
            <div class='topbar-student position-fixed'>
                <nav class="navbar-expand-lg navbar-light bg-white p-4">
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div class="col-lg-4">
                            <form action="#" method="#">
                                <div class="form-group text-secondary">
                                    <Link to="#"><i class="icon-search fas fa-search position-absolute"></i></Link>
                                    <input type="text" class="form-control rounded-pill pl-4" id="search-class" name="search-class" placeholder="Skill apa yang ingin kamu pelajari" />
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 offset-lg-3">
                            <ul class="navbar-nav mr-auto mt-n2">
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class='fas fa-th-large mr-2' /> <span> Kelas Lain </span> </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class='fas fa-question-circle' /> </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class='fas fa-shopping-cart' /> </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class='fas fa-bell' /> </a>
                                </li>
                                <li class="nav-item dropdown no-arrow">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <img class="img-profile rounded-circle ml-4" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" width="40px" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu id="dd-menu">
                                            <UserInformation />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopBarStudent;