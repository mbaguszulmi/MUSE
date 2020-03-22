import React, { Component } from "react";
import { Link } from 'react-router-dom';
import TopBar from "../admin/TopBarAdmin";

class TopBarStudent extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link to="#" class="navbar-brand ml-2"><i class="fas fa-bars"></i></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="#" class="nav-link font-weight-bold">Muse</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">|</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled font-weight-bold small mt-1" style={{ color: "blue" }}>Belajar Desain Aplikasi E-Banking</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-2">
                        <li class="nav-item">
                            <button type="button" class="btn btn-outline-primary mr-4"><i class="fas fa-angle-left mr-1"></i>Kembali</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-primary">Bagikan kelas</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default TopBarStudent;