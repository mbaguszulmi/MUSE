import React, { Component } from 'react';

import StudentRouter from '../routes/student-route';

class Student extends Component {
    render() {
        return (
            <div class="student">
                <StudentRouter />
            </div>
        );
    }
}

export default Student;