import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';


class SidebarStudentRight extends Component {
    render() {
        return (
            <div class="sidebar-right pl-5">
                <ul class="navbar-nav sidebar-light" id="accordionSidebar" >
                    <h1 class="h5 font-weight-bold pb-2">Daftar Materi</h1>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#FF9160" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <small class="text-secondary">8 dari 12 materi telah selesai</small>
                    <li class="nav-item mt-2">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <span>Bagian 1: UX Principle</span>
                                <i class='fas fa-angle-right mr-5' />
                            </Dropdown.Toggle>
                            <DropdownMenuItem />
                        </Dropdown>
                    </li>
                </ul>
            </div>
        );
    }
}

function DropdownMenuItem() {
    return (
        <Dropdown.Menu id="dd-menu">
            <Dropdown.Item id="dd-item" href="#/action-1">
                <div class='row'>
                    <div class='col-lg-2'>
                        <div class="bg-item bg-item-finished">
                            <i class='fas fa-check' />
                        </div>
                    </div>
                    <div class='col-lg'>
                        UX Principle 1 <br />
                        <small class="text-secondary">02:30</small>
                    </div>
                </div>
            </Dropdown.Item>
            <Dropdown.Item id="dd-item" href="#/action-1">
                <div class='row'>
                    <div class='col-lg-2'>
                        <div class="bg-item bg-item-paused">
                            <i class='fas fa-pause' />
                        </div>
                    </div>
                    <div class='col-lg'>
                        UX Principle 2 <br />
                        <small class="text-secondary">02:30</small>
                    </div>
                </div>
            </Dropdown.Item>
            <Dropdown.Item id="dd-item" href="#/action-1">
                <div class='row'>
                    <div class='col-lg-2'>
                        <div class="bg-item bg-item-start">
                            <i class='fas fa-caret-right' />
                        </div>
                    </div>
                    <div class='col-lg'>
                        UX Principle 3 <br />
                        <small class="text-secondary">02:30</small>
                    </div>
                </div>
            </Dropdown.Item>
        </Dropdown.Menu>
    );
}

export default SidebarStudentRight;