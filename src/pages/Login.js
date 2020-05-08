import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Brand from '../assets/img/logo.jpeg';

class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-1 offset-lg-3">
              <img src={Brand} width="50px"></img>
            </div>
            <div class="col-lg-4">
              <h1 class="font-weight-bold mt-2 text-grey-900">MUSE Academy</h1>
            </div>
          </div>
        </div>
        <div class="container mt-n4">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="p-5">
                        <h1 class="text-gray-900 mb-0 font-weight-bold">Masuk</h1>
                        <p class="mb-4">Masuk dan mulai kelasmu</p>
                        <form class="user">
                          <Link to="/admin" id="btn-google" class="btn btn-primary btn-block mb-3 p-2">
                            <i class="fab fa-google fa-fw"></i> Masuk dengan Google
                          </Link>
                          <h6 class="font-weight-bold text-center">Atau</h6>
                          <div class="form-group">
                            <label for="email" class="font-weight-bold">Alamat Email</label>
                            <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" required />
                          </div>
                          <div class="form-group">
                            <label for="password" class="font-weight-bold">Password</label>
                            <input type="password" class="form-control" id="password" name="password" placeholder="Password" required />
                          </div>
                          <div class="form-group">
                            <div class="custom-control custom-checkbox small">
                              <div class="row">
                                <div class="col-lg-6">
                                  <input type="checkbox" class="custom-control-input" id="customCheck" />
                                  <label class="custom-control-label" for="customCheck">Biarkan tetap masuk</label>
                                </div>
                                <div class="col-lg-6 d-flex justify-content-end">
                                  <div class="text-center">
                                    <Link to="/forgot-password" id="forgotPassword">Lupa Password?</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Link to="/student/my-class" id="login-button" class="btn btn-outline-secondary btn-block p-2">
                            Masuk
                        </Link>
                          <div class="col-lg-12 d-flex justify-content-center mt-2">
                            <div class="text-center">
                              <Link to="/registration" id="registration">Daftar akun baru!</Link>
                            </div>
                          </div>
                        </form>
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

export default Login;