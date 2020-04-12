import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopBarClassCollection from '../../components/student/TopBarClassCollection';
import ClassRouter from '../../routes/class-route';


class ClassCollection extends Component {
    render() {
        return (
            <div class='class-collection'>
                <div class='container'>
                    <TopBarClassCollection />
                    <div class='content pt-4'>
                        <h2 class="font-weight-bold text-center">Koleksi Kelas</h2>
                        <p class="text-secondary text-center">Upgrade skillmu bersama Muse Academy</p>

                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item mr-3">
                                        <Link to="/student/class-collection" class="nav-link" id="category"><i class='fas fa-globe mr-2' />Semua kategori</Link>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <Link to="/student/class-collection/coding" class="nav-link" id="coding"><i class='fas fa-code mr-2' />Coding</Link>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <Link to="/student/class-collection/design" class="nav-link" id="design"><i class='far fa-play-circle mr-2' />UI / UX</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/student/class-collection/multimedia" class="nav-link" id="multimedia"> <i class='far fa-play-circle mr-2' />Multimedia</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <ClassRouter />
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassCollection;