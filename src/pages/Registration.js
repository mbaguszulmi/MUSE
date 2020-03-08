import React, { Component } from 'react'

class Registration extends Component {
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
                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input type="name" class="form-control form-control-user" id="name" name="name" placeholder="Name" required />
                        </div>
                        <div class="form-group">
                          <input type="email" class="form-control form-control-user" id="email" name="email" placeholder="Email Address" required />
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input type="password" class="form-control form-control-user" id="password1" name="password1" placeholder="Password" required />
                          </div>
                          <div class="col-sm-6">
                            <input type="password" class="form-control form-control-user" id="password2" name="password2" placeholder="Repeat Password" required />
                          </div>
                        </div>
                        <a href="login" class="btn btn-primary btn-user btn-block">
                          Register Account
                        </a>
                      </form>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="forgot-password">Forgot Password?</a>
                      </div>
                      <div class="text-center">
                        <a class="small" href="login">Already have an account? Login!</a>
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

export default Registration;