import React, { Component } from 'react';

import Mentor from '../../../assets/img/mentor.jpg';

class AboutClass extends Component {
    render() {
        return (
            <div class="about-class">
                <ClassSpesification />
                <YourCourses />
                <YourRewards />
                <AboutMentor />
            </div>
        );
    }
}

function ClassSpesification() {
    return (
        <div class="row p-4">
            <div class="col-lg-10 offset-lg-1">
                <h1 class="h4 font-weight-bold">Spesifikasi Kelas</h1>
                <div class="row">
                    <div class="col-lg-3">
                        <p>Jenis Kelas</p>
                    </div>
                    <div class="col-lg-3">
                        <p class="font-weight-bold">Premium</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <p>Tingkat Kelas</p>
                    </div>
                    <div class="col-lg-3">
                        <p class="font-weight-bold">Pemula</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <p>Jumlah Peserta</p>
                    </div>
                    <div class="col-lg-3">
                        <p class="font-weight-bold">2400</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <p>Bahasa</p>
                    </div>
                    <div class="col-lg-3">
                        <p class="font-weight-bold">Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function YourCourses() {
    return (
        <div class="row p-3">
            <div class="col-lg-10 offset-lg-1">
                <h1 class="h4 font-weight-bold">Yang akan kamu pelajari</h1>
                <div class="row">
                    <div class="col-lg-7">
                        <p>Pada kelas ini kamu akan mempelajari fundamental dari UI dan UX dengan projek akhir membuat sebuah desain mobile app bertema fintech, kamu akan mempelajari :</p>
                        <ol class="ml-4">
                            <li>UX Principle</li>
                            <li>UI Principle</li>
                            <li>Materi 3</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

function YourRewards() {
    return (
        <div class="row p-3">
            <div class="col-lg-10 offset-lg-1">
                <h1 class="h4 font-weight-bold">Yang akan kamu dapatkan</h1>
                <div class="row">
                    <div class="col-lg-7">
                        <ul class="ml-4">
                            <li class="font-weight-bold">Sertifikat Professional</li>
                            <li class="font-weight-bold">120 video 1080p dan Modul Praktikum</li>
                            <li class="font-weight-bold">Chat dengan mentormu</li>
                            <li class="font-weight-bold">Bangun portofolio</li>
                            <li class="font-weight-bold">Jual karyamu</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutMentor() {
    return (
        <div class="row p-3">
            <div class="col-lg-10 offset-lg-1">
                <h1 class="h4 font-weight-bold">Profile mentormu</h1>
                <div class="row mt-3">
                    <div class="col-lg-1">
                        <img src={Mentor} class="rounded-circle" width="50px" height="50px" />
                    </div>
                    <div class="col-lg-10 pl-4">
                        <span class="font-weight-bold">Nicolas Jonathan Doe</span><br />
                        <span class="small">UI/UX Designer</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7    ">
                        <p class="mt-4">Ad voluptate commodo amet aute aliquip excepteur veniam officia. Ullamco voluptate consequat veniam aliqua deserunt velit. In consectetur aute pariatur enim officia eu cupidatat. Ad duis incididunt amet aute fugiat culpa aliquip aute. Sit commodo voluptate enim quis velit et ex aliqua aliquip ullamco ex. Duis est ea magna excepteur laborum labore dolore esse. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutClass;