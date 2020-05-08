import React, { Component } from 'react';

import TopbarClassCollection from '../../components/student/TopBarClassCollection';

import Img from '../../assets/img/logo.jpeg';

class Checkout extends Component {
    render() {
        return (
            <div class='checkout'>
                <TopbarClassCollection />
                <section>
                    <div class='row'>
                        <div class='col-lg-5'>
                            <h2 class="font-weight-bold mb-3">Checkout</h2>
                            <p>pilih metode pembayaran</p>
                            <table>
                                <div class='table pay-method'>
                                    <input type='radio' id="pay-method" name="pay-method" value="ovo" />
                                    <label for='pay-method'>OVO</label>
                                </div>
                                <div class='table no-ovo'>
                                    <p class="text-secondary">masukkan no hp anda yang terdaftar di <span>ovo</span></p>
                                    <p>Nomor Handphone</p>
                                    <input type='text' id="no-hp" name="no-hp" placeholder="Contoh : 0812xxxxxxxx"></input>
                                </div>
                                <div class='table pay-method'>
                                    <input type='radio' id="transfer" name="transfer" value="tranfer" />
                                    <label for='transfer'>Transfer Bank</label>
                                </div>
                            </table>
                        </div>
                        <div class='col-lg-6 offset-lg-1'>
                            <div class='box'><img src={Img}></img></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Checkout;