import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Content } from 'react-mdl';

import KementrianAgama from '../../assets/img/kementrian-agama.png';
import Message from '../../assets/img/surat-dinas-pemerintah.jpg';

class ContentMessage extends Component {
    render() {
        return (
            <div class="content-mes container">
                <header>
                    <div class="container mb-3 ml-3">
                        <h3>Undangan Operator EMIS</h3>
                    </div>
                    <div class="row">
                        <img src={KementrianAgama} width="50px" class="rounded-circle ml-n3 border border-dark" />
                        <div class="col-lg-5 ml-2 mt-2">
                            <span class="font-weight-bold">Kementrian Agama</span>
                            <span>-kementrianagama@gmail.com</span>
                        </div>
                        <div class="col-lg-4 offset-lg-2 text-right mt-2">
                            <span class="small mr-3">3 Maret 2020 21.30 (9 Hari yang lalu)</span>
                            <Link to=""><i class="fas fa-reply mr-3" style={{ color: '#000' }}></i></Link>
                            <Link to=""><i class="fas fa-ellipsis-v" style={{ color: '#000' }}></i></Link>
                        </div>
                    </div>
                </header>
                <Content>
                    <div class="container m-3">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="container text-center mt-4 pt-3 shadow">
                                    <img src={KementrianAgama} width="100px"></img>
                                    <hr />
                                    <img src={Message}></img>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button class="btn btn-outline-secondary"><i class="fas fa-reply mr-3"></i>Balas</button>
                                <button class="btn btn-outline-secondary ml-2"><i class="fas fa-long-arrow-alt-right mr-2"></i>Teruskan</button>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        );
    }
}

export default ContentMessage;