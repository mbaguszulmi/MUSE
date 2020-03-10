import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Login</h1>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input type="text" class="form-control form-control-user" id="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" required />
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control form-control-user" id="password" name="password" placeholder="Password" required />
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input type="checkbox" class="custom-control-input" id="customCheck" />
                            <label class="custom-control-label" for="customCheck">Remember Me</label>
                          </div>
                        </div>
                        <Link to="/admin" class="btn btn-primary btn-user btn-block">
                          Login
                        </Link>
                      </form>
                      <hr />
                      <div class="text-center">
                        <a id="forgotPassword" class="small"><Link to="/forgot-password">Forgot Password?</Link></a>
                      </div>
                      <div class="text-center">
                        <a id="createAccount" class="small"><Link to="/registration">Create an Account!</Link></a>
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