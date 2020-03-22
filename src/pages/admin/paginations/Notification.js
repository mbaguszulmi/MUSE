import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notification extends Component {
    render() {
        return (
            <div class="notification">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Notification</h1>
                </div>
            </div>
        );
    }
}

export default Notification;