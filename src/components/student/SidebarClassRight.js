import React, { Component } from 'react';

class SidebarStudentRight extends Component {
    render() {
        return (
            <div class='sidebar-student-right'>
                <div class='row justify-content-between'>
                    <div class='col-lg-4'>
                        <p class="font-weight-bold">Capaianku</p>
                    </div>
                    <div class='col-lg-4'>
                        <a href='#' class="text-decoration-none"><span>Lihat semua</span></a>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-lg-3'>
                        <div class='icon-certificate'>
                            <i class='fas fa-fw fa-graduation-cap' />
                        </div>
                    </div>
                    <div class='col-lg mt-2'>
                        <small>Sertifikat</small>
                        <p class="font-weight-bold">2 Sertifikat profesional</p>
                    </div>
                </div>
                <div class='row mt-4'>
                    <div class='col-lg-3'>
                        <div class='icon-badge'>
                            <i class='fas fa-fw fa-award' />
                        </div>
                    </div>
                    <div class='col-lg mt-2'>
                        <small>Badge</small>
                        <p class="font-weight-bold">5 Badge prestasi</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarStudentRight;