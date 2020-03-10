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
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                                <p class="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                                            </div>
                                            <form class="user">
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                                </div>
                                                <Link to="/login" class="btn btn-primary btn-user btn-block">
                                                    Reset Password
                                                </Link>
                                            </form>
                                            <hr />
                                            <div class="text-center">
                                                <a class="small"><Link to="/registration">Create an Account!</Link></a>
                                            </div>
                                            <div class="text-center">
                                                <a class="small"><Link to="/login">Already have an account? Login!</Link></a>
                                            </div>
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