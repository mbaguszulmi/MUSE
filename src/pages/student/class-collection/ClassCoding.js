import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Img from '../../../assets/img/logo.jpeg';

class ClassCoding extends Component {
    render() {
        return (
            <div class='coding mt-3'>
                <div class='row'>
                    <div class='col-lg'>
                        <div class="card">
                            <img class="card-img-top" src={Img} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Fullstack Web Designer-Landing Page</h5>
                                <p class="card-text">Nicolas Jonathan Doe</p>
                                <Link to='/student/checkout' class='btn btn-primary'>Gratis</Link>
                            </div>
                        </div>
                    </div>

                    <div class='col-lg'>
                        <div class="card">
                            <img class="card-img-top" src={Img} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Fullstack Web Designer-Landing Page</h5>
                                <p class="card-text">Nicolas Jonathan Doe</p>
                                <Link to="/student/checkout" class="btn btn-primary">Gratis</Link>
                            </div>
                        </div>
                    </div>

                    <div class='col-lg'>
                        <div class="card">
                            <img class="card-img-top" src={Img} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Fullstack Web Designer-Landing Page</h5>
                                <p class="card-text">Nicolas Jonathan Doe</p>
                                <span class="font-weight-bold">Rp 12.000.000 <del class="small ml-2">Rp 13.000.000</del></span>
                            </div>
                        </div>
                    </div>

                    <div class='col-lg'>
                        <div class="card">
                            <img class="card-img-top" src={Img} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Fullstack Web Designer-Landing Page</h5>
                                <p class="card-text">Nicolas Jonathan Doe</p>
                                <span class="font-weight-bold">Rp 12.000.000 <del class="small ml-2">Rp 13.000.000</del></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassCoding;