import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                      <Link to="/" class="text-decoration-none">
                        <i class="fas fa-angle-left mr-2"></i>
                        Sudah punya akun</Link>
                      <h1 class="font-weight-bold text-gray-900 mt-4">Daftar Akun</h1>
                      <p>Upgrade skillmu dan dapatkan pekerjaan impian</p>
                      <form class="user mt-4" action="" method="post">
                        <div class="form-group">
                          <label for="name" class="font-weight-bold">Nama lengkap</label>
                          <input type="text" class="form-control" id="name" name="name" placeholder="Masukkan nama lengkapmu" />
                        </div>
                        <div class="form-group">
                          <label for="email" class="font-weight-bold">Alamat Email</label>
                          <input type="email" class="form-control" id="email" name="email" placeholder="Masukkan alamat emailmu" />
                        </div>
                        <div class="form-group">
                          <label for="password1" class="font-weight-bold">Password</label>
                          <input type="password" class="form-control" id="password1" name="password1" placeholder="Password min 8 karakter" />
                        </div>
                        <div class="form-group">
                          <label for="password2" class="font-weight-bold">Konfirmasi password</label>
                          <input type="password" class="form-control" id="password2" name="password2" placeholder="Masukkan password lagi" />
                        </div>
                        <label class="font-weight-bold">Pilih statusmu</label><br></br>
                        <input class="mr-2" type="radio" id="sekolah" name="status" value="sekolah" />
                        <label class="mr-3" for="sekolah">Sekolah</label>
                        <input class="mr-2" type="radio" id="kuliah" name="status" value="kuliah" />
                        <label class="mr-3" for="kuliah">Kuliah</label>
                        <input class="mr-2" type="radio" id="kerja" name="status" value="kerja" />
                        <label class="mr-3" for="kerja">Kerja</label>
                        <Link to="/" id="create-account" class="btn p-2 btn-primary btn-block mt-4">Buat akun saya</Link>

                        <a href="index.html" class="btn btn-outline-primary btn-block mt-4 mb-3 p-2">
                          <i class="fab fa-google fa-fw"></i> Masuk dengan Google
                        </a>
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

export default Registration;