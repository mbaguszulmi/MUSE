import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Img1 from '../../../assets/img/img-class1.png'
import Img2 from '../../../assets/img/img-class2.png'
import Img3 from '../../../assets/img/img-class3.png'

class ClassActive extends Component {
    render() {
        return (
            <div class='class-active'>
                <div class='class-1 class'>
                    <div class='row p-3'>
                        <div class='col-lg-2'>
                            <img src={Img1}></img>
                        </div>
                        <div class='col-lg-8'>
                            <h3 class="font-weight-bold mt-2">Kelas belajar agile development dan framework scrum</h3>
                            <span>Nicolas Jonathan Doe</span>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "100%", backgroundColor: "#18A0FB", borderRadius: "7px" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                            <small>22 dari 22 materi telah selesai</small>
                        </div>
                        <div class='col-lg-2 align-self-end d-flex justify-content-end'>
                            <button class='btn button mb-3'>Klaim Sertifikat</button>
                        </div>
                    </div>
                </div>
                <div class='class-2 class'>
                    <div class='row p-3'>
                        <div class='col-lg-2'>
                            <img src={Img2}></img>
                        </div>
                        <div class='col-lg-8'>
                            <h3 class="font-weight-bold mt-2">Belajar desain aplikasi E-Banking</h3>
                            <span>Nicolas Jonathan Doe</span>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "80%", backgroundColor: "#FF9160", borderRadius: "7px" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                            <small>8 dari 12 materi telah selesai</small>
                        </div>
                        <div class='col-lg-2 align-self-end d-flex justify-content-end'>
                            <Link to="/student/course" class='btn button mb-3'>Lanjut</Link>
                        </div>
                    </div>
                </div>
                <div class='class-3 class'>
                    <div class='row p-3'>
                        <div class='col-lg-2'>
                            <img src={Img3}></img>
                        </div>
                        <div class='col-lg-8'>
                            <h3 class="font-weight-bold mt-2">Kelas belajar membangun landing page desain</h3>
                            <span>Nicolas Jonathan Doe</span>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "3%", backgroundColor: "#FF9160", borderRadius: "7px" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                            </div>
                            <small>0 dari 22 materi telah selesai</small>
                        </div>
                        <div class='col-lg-2 align-self-end d-flex justify-content-end'>
                            <button class='btn button mb-3'>Lanjut</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassActive;