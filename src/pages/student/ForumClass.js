import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutClass extends Component {
    render() {
        return (
            <div class="forum-class">
                <div class="container">
                    <div class="row  text-center pt-5">
                        <div class="col-lg-6 offset-lg-3">
                            <form action="" method="post">
                                <div class="form-group text-secondary">
                                    <Link to="#"><i class="icon-search fas fa-search position-absolute"></i></Link>
                                    <input type="text" class="form-control rounded-pill pl-4" id="chat-mentor" name="chat-mentor" placeholder="Cari apa saja" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row  text-center pt-5">
                        <div class="col-lg-6 offset-lg-3">
                            <span class="small">Urutkan berdasar</span><br />   
                            <div class="btn btn-light">
                                <span class="small">Terbaru</span>
                                <i class="fas fa-angle-down ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutClass;