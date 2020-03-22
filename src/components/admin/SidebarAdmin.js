import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >
                <SidebarBrand />
                <Dashboard />
                <div class="sidebar-heading">Interface</div>
                <Settings />
                <Management />
                <div class="sidebar-heading">Payment</div>
                <Payment />
            </ul>
        );
    }
}

function SidebarBrand() {
    return (
        <Link to="/admin/dashboard" class="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">MUSE</div>
        </Link>
    );
}

function Dashboard() {
    return (
        <li class="nav-item active">
            <Link to="/admin" class="nav-link">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </Link>
        </li>
    );
}

function Settings() {
    return (
        <li class="nav-item">
            <Link to="/admin/settings" class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Settings</span>
            </Link>
        </li>
    );
}

function Management() {
    return (
        <li class="nav-item">
            <Link to="/admin/management" class="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-wrench"></i>
                <span>Management</span>
            </Link>
        </li>
    );
}

function Payment() {
    return (
        <li class="nav-item">
            <Link to="payment" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Payment Gatway</span>
            </Link>
        </li>
    );
}

export default Sidebar;