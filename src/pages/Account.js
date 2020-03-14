import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Account extends Component {
    render() {
        return (
            <div class="account shadow p-3 d-flex justify-content-end bg-light">
                <div class="row text-center">
                    <div class="col-lg-12">
                        <img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" class="rounded-circle" width="80px"></img>
                    </div>
                    <div class="col-lg-12">
                        <p class="font-weight-bold mt-3 mb-4">Valerie Luna</p>
                        <br />
                        <p class="mt-n5">valerieluna@gmail.com</p>
                        <div class="container mb-2">
                            <button type="sumbit" class="btn btn-outline-secondary btn-block rounded-pill"><span class="font-weight-bold">Kelola Akun Anda</span></button>
                        </div>
                    </div>
                    <hr class="btn-block" />
                    <div class="col-lg-12">
                        <div class="container p-3">
                            <Link to="/login" class="btn btn-outline-secondary btn-block"><span class="font-weight-bold">Logout akun</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;