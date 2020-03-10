import React, { Component } from 'react';

import '../assets/css/admin.css'
import AdminRouter from '../routes/admin-route';

//component
import NavAdmin from '../components/NavAdmin';
import Sidebar from '../components/SidebarAdmin';


class Admin extends Component {
    render() {
        return (
            <div id="wrapper">
                <Sidebar />

                {/* Content Wrapper */}
                <div id="content-wrapper" class="d-flex flex-column" >

                    {/* Main Content */}
                    <div id="content" >
                        <NavAdmin />
                        <div class="container-fluid">
                            <AdminRouter />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Admin