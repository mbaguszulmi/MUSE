import React, { Component } from 'react';

//component
import NavAdmin from '../components/NavAdmin';
import Sidebar from '../components/SidebarAdmin';


class Admin extends Component {
    render() {
        return (
            <div id="wrapper">

                <Sidebar />
                <NavAdmin />

            </div>
        );
    }
}

export default Admin