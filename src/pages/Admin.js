import React, { Component } from 'react';

import AdminRouter from '../routes/admin-route';

//component
import Sidebar from '../components/admin/SidebarAdmin';
import TopBarAdmin from '../components/admin/TopBarAdmin';


class Admin extends Component {
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column" >
                    <div id="content">
                        <TopBarAdmin />
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