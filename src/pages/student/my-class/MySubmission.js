import React, { Component } from 'react';

class MySubmission extends Component {
    render() {
        return (
            <div class='my-submission'>
                <div class='table-content'>
                    <div class='table table-header'>
                        <span>Status</span>
                        <span>Judul submission</span>
                        <span>Kelas</span>
                        <span>Tanggal submit</span>
                        <span>Nilai</span>
                        <span>Aksi</span>
                    </div>
                    <div class='table list-table'>
                        <button disabled>Diterima</button>
                        <span>Submission 1: Landing page untuk company profile</span>
                        <span>Belajar membangun landing page website</span>
                        <span>12 Mar 2020</span>
                        <span>0<span className="text-secondary">/100</span></span>
                        <button type="submit" class='show'>Lihat</button>
                    </div>
                    <div class='table list-table'>
                        <button disabled>Proses review</button>
                        <span>Submission 1: Landing page untuk company profile</span>
                        <span>Belajar membangun landing page website</span>
                        <span>12 Mar 2020</span>
                        <span>80<span className="text-secondary">/100</span></span>
                        <button type="submit" class='show'>Lihat</button>
                    </div>
                    <div class='table list-table'>
                        <button disabled>Proses review</button>
                        <span>Submission 1: Landing page untuk company profile</span>
                        <span>Belajar membangun landing page website</span>
                        <span>12 Mar 2020</span>
                        <span>0<span className="text-secondary">/100</span></span>
                        <button type="submit" class='show'>Lihat</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MySubmission;