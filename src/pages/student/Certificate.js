import React, { Component } from 'react';

import MenuSidebar from '../../components/student/SidebarStudentMenu';
import Topbar from '../../components/student/TopBarStudent';

class Certificate extends Component {
    render() {
        return (
            <div class="certificate">
                <MenuSidebar />
                <Topbar />
                <div class='content'>
                    <header>
                        <h2 class="font-weight-bold text-black-50 p-4">Daftar sertifikat</h2>
                    </header>
                    <div class='table table-header'>
                        <span>No sertifikat</span>
                        <span>Kelas</span>
                        <span>Mentor</span>
                        <span>Masa berlaku</span>
                        <span>Aksi</span>
                    </div>
                    <div class='table list-table'>
                        <span>123456789</span>
                        <span>Belajar membangun landing page website</span>
                        <span>Nicolas Jonathan Doe</span>
                        <span>Berlaku sampai 1 Agustus 2023</span>
                        <span>
                            <button type="submit" class='show'>Lihat</button>
                            <button type="submit" class='download'>Download</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Certificate;