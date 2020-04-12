import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
    render() {
        return (
            <div class="container">
                {/* Outer Row */}
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="p-5">
                                            <Link to="/" class="text-decoration-none">
                                                <i class="fas fa-angle-left mr-2"></i>
                                                Sudah punya akun</Link>
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-2 mt-4">Lupa Password?</h1>
                                                <p class="mb-4">Masukkan email di bawah dan kirim untuk mendapatkan password anda!</p>
                                            </div>
                                            <form class="user">
                                                <div class="form-group">
                                                    <input type="email" class="form-control p-3" id="email" name="email" placeholder="Masukkan alamat email" />
                                                </div>
                                                <Link to="/" class="btn btn-primary btn-block mt-4 p-2">
                                                    Reset Password
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;