import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TopBarStudent extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light topbar">
                <Link to="#" class="navbar-brand ml-2"><i class="fas fa-bars"></i></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link disabled font-weight-bold" style={{ color: "black" }}>Muse</a>
                        </li>
                        <div class="topbar-divider d-none d-sm-block"></div>
                        <li class="nav-item">
                            <a class="nav-link disabled font-weight-bold" style={{ color: "blue" }}>Belajar Desain Aplikasi E-Banking</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-2">
                        <li class="nav-item">
                            <button type="button" class="btn btn-outline-primary pl-3 pr-3 mr-4"><i class="fas fa-angle-left mr-1"></i>Kembali</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-primary pr-3 pl-3">Bagikan kelas</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default TopBarStudent;