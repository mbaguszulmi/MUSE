import React, { Component } from 'react';

import StudentRouter from '../routes/student-route';

class Student extends Component {
    render() {
        return (
            <div class="Student">
                <StudentRouter />
            </div>
        );
    }
}

export default Student;