import React, { Component } from 'react';

import MenuSidebar from '../../components/student/SidebarStudentMenu';
import Topbar from '../../components/student/TopBarStudent';

class StatisticsCourse extends Component {
    render() {
        return (
            <div class="statistics-course">
                <MenuSidebar />
                <Topbar />
                <div class='content'>
                    <div class="card">
                        <div class="card-body">
                            <div class='row justify-content-between'>
                                <div class='col-lg-6'>
                                    <h3>Durasi belajar</h3>
                                </div>
                                <div class='col-lg-6 text-right'>
                                    <button class='button ml-n1 text-secondary'>Minggu ke-1 <i class='fas fa-angle-down ml-1' /> </button>
                                </div>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatisticsCourse;