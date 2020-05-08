import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import Brand from '../../assets/icons/brand.svg';
import UserInformation from '../../pages/admin/UserInformation';

class TopBarClassCollection extends Component {
    render() {
        return (
            <div class='topbar-class-collection fixed-top'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#"><img src={Brand}></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div class="col-lg-7 mt-3 ml-3">
                            <form action="#" method="#">
                                <div class="form-group text-secondary">
                                    <Link to="#"><i class="icon-search fas fa-search position-absolute"></i></Link>
                                    <input type="text" class="form-control rounded-pill pl-4" id="search-class" name="search-class" placeholder="Skill apa yang ingin kamu pelajari" />
                                </div>
                            </form>
                        </div>
                        <ul class="navbar-nav mt-2">
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
                                        <img class="img-profile rounded-circle ml-5" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" width="40px" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu id="dd-menu">
                                        <UserInformation />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopBarClassCollection;