import React, { Component } from 'react';

import MenuSidebar from '../../components/student/SidebarStudentMenu';
import Topbar from '../../components/student/TopBarStudent';

import Portfolio1 from '../../assets/img/portfolio1.png';
import Portfolio2 from '../../assets/img/portfolio2.png';
import Portfolio3 from '../../assets/img/portfolio3.png';

class Portfolio extends Component {
    render() {
        return (
            <div class="portfolio">
                <MenuSidebar />
                <Topbar />
                <div class='content p-4'>
                    <header>
                        <h2 class="font-weight-bold text-black-50">Portfolio saya</h2>
                    </header>
                    <div class='cards'>
                        <div class='card'>
                            <span></span>
                            <img src={Portfolio1}></img>
                            <button id="btn-portfolio">Lihat</button>
                        </div>
                        <div class='card'>
                            <span></span>
                            <img src={Portfolio2}></img>
                            <button id="btn-portfolio">Lihat</button>
                        </div>
                        <div class='card'>
                            <span></span>
                            <img src={Portfolio3}></img>
                            <button id="btn-portfolio">Lihat</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;