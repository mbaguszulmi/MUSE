import React, { Component } from 'react';


class SidebarStudentRight extends Component {
    render() {
        return (
            <div class="sidebar-right pl-5">
                <div class="navbar-nav sidebar-light" id="accordionSidebar" >
                    <h1 class="h5 font-weight-bold pb-2">Daftar Materi</h1>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#FF9160" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <small class="text-secondary">8 dari 12 materi telah selesai</small>
                    <ul class="dropdown-basic">
                        <li>
                            <span>Bagian 1: UX Principle</span>
                            <i class='fas fa-angle-right' />
                            <MenuItem />
                        </li>
                        <li>
                            <span>Bagian 2: UX Principle</span>
                            <i class='fas fa-angle-right' />
                            <MenuItem />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function MenuItem() {
    return (
        <ul>
            <li>
                <a href='#'>
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
                </a>
            </li>
            <li>
                <a href='#'>
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
                </a>
            </li>
            <li>
                <a href='#'>
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
                </a>
            </li>
        </ul>
    );
}

export default SidebarStudentRight;