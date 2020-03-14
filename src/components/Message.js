import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Message extends Component {
    render() {
        return (
            <div class="message">
                <h1 class="font-weight-bold">Message</h1>
                <ul class="list-group list-group-flush">
                    <hr />
                    <li class="list-group-item pl-3">
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
                    </li>
                    <li class="list-group-item pl-3">
                        <div class="row">
                            <div class="col-lg-3">
                                <input type="checkbox" id="customCheck" />
                                <label class="pl-3 font-weight-bold mb-n2">Customer</label>
                            </div>
                            <div class="col-lg-8">
                                <span class="font-weight-bold">Batas waktu kelas hampir habis</span>
                                <span>-hello admin, batas waktu kelas master web developer...</span>
                            </div>
                            <div class="col-lg-1 text-right">
                                <span class="small">13 Mar</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item pl-3">
                        <div class="row">
                            <div class="col-lg-3">
                                <input type="checkbox" id="customCheck" />
                                <label class="pl-3 font-weight-bold mb-n2">Customer</label>
                            </div>
                            <div class="col-lg-8">
                                <span class="font-weight-bold">Batas waktu kelas hampir habis</span>
                                <span>-hello admin, batas waktu kelas master web developer...</span>
                            </div>
                            <div class="col-lg-1 text-right">
                                <span class="small">13 Mar</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item pl-3">
                        <div class="row">
                            <div class="col-lg-3">
                                <input type="checkbox" id="customCheck" />
                                <label class="pl-3 mb-n2">Customer</label>
                            </div>
                            <div class="col-lg-8">
                                <span >Batas waktu kelas hampir habis</span>
                                <span>-hello admin, batas waktu kelas master web developer...</span>
                            </div>
                            <div class="col-lg-1 text-right">
                                <span class="small">13 Mar</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item pl-3">
                        <div class="row">
                            <div class="col-lg-3">
                                <input type="checkbox" id="customCheck" />
                                <label class="pl-3 font-weight-bold mb-n2">Customer</label>
                            </div>
                            <div class="col-lg-8">
                                <span class="font-weight-bold">Batas waktu kelas hampir habis</span>
                                <span>-hello admin, batas waktu kelas master web developer...</span>
                            </div>
                            <div class="col-lg-1 text-right">
                                <span class="small">13 Mar</span>
                            </div>
                        </div>
                    </li>
                    <hr />
                </ul>
            </div>
        );
    }
}

export default Message;