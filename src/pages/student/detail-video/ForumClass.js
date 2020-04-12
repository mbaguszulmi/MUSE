import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForumClass extends Component {
    render() {
        return (
            <div class="forum-class">
                <div class="col-lg-8 offset-lg-2">
                    <div class="row  text-center pt-5">
                        <div class="col-lg-12">
                            <form action="" method="post">
                                <div class="form-group text-secondary">
                                    <Link to="#"><i class="icon-search fas fa-search position-absolute"></i></Link>
                                    <input type="text" class="form-control rounded-pill pl-4" id="chat-mentor" name="chat-mentor" placeholder="Cari apa saja" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-lg-4">
                            <span class="small">Urutkan berdasar</span><br />
                            <div class="btn btn-filter">
                                <span class="small">Terbaru</span>
                                <i class="fas fa-angle-down ml-2" />
                            </div>
                        </div>
                        <div class="col-lg-3 pl-4 pt-4">
                            <div class="btn btn-outline-primary">
                                <span class="small">Buat Pertanyaan</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 text-center mt-5">
                        <h1 class="h4">Belum ada diskusi forum</h1>
                        <p class="text-secondary p-3">jika kamu menemui kesulitan dalam mempelajari materi dan mentormu belum merespon, kamu bisa bertanya ke perserta lain lewat forum</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForumClass