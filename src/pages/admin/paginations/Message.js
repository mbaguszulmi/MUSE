import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Message extends Component {
    render() {
        return (
            <div class="message">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Messages</h1>
                </div>
                <ul class="list-group list-group-flush">
                    <hr />
                    <li class="list-group-item pl-3">
                        <ListMessages />
                    </li>
                    <hr />
                </ul>
            </div>
        );
    }
}

function ListMessages() {
    return (
        <div class="row">
            <div class="col-lg-3">
                <input type="checkbox" id="customCheck" />
                <label class="pl-3 font-weight-bold mb-n2">Kementrian Agama</label>
            </div>
            <div class="col-lg-8">
                <Link to="/admin/content-mes" class="text-decoration-none">
                    <span class="font-weight-bold">Undangan Operator EMIS</span>
                    <span>-Berdasarkan DIPA kantor Kementrian Agama kabupaten blitar...</span>
                </Link>
            </div>
            <div class="col-lg-1 text-right">
                <span class="small">13 Mar</span>
            </div>
        </div>
    );
}

export default Message;