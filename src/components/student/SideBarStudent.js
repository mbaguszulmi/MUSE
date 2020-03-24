import React, { Component } from 'react';

class SideBarStudent extends Component {
    render() {
        return (
            <div class="sidebar-student pl-5">
                <ul class="navbar-nav sidebar-light" id="accordionSidebar" >
                    <h1 class="h5 font-weight-bold pb-2">Daftar Materi</h1>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <span class="text-secondary" style={{ fontSize: "10px" }}>5 dari 20 materi telah selesai</span>
                    <li class="nav-item ml-n3">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#bagian1" aria-expanded="true" aria-controls="bagian1">
                            <span>Bagian 1 : UX Principle</span>
                        </a>
                        <div id="bagian1" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="#">UX Principle 1</a>
                                <a class="collapse-item" href="#">UX Principle 2</a>
                                <a class="collapse-item" href="#">UX Principle 3</a>
                                <a class="collapse-item" href="#">UX Principle 4</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideBarStudent;