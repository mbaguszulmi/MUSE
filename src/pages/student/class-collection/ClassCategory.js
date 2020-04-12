import React, { Component } from 'react';

class ClassCategory extends Component {
    render() {
        return (
            <div class='category'>
                <div class='banner'>
                    <div class='row justify-content-between mt-3'>
                        <div class='col-lg-2 bg-dark'>banner1</div>
                        <div class='col-lg-7 bg-dark'>banner2</div>
                        <div class='col-lg-2 bg-dark'>banner3</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassCategory;