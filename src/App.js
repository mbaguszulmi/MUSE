import React, { Component } from 'react';
import Routes from './routes/main-route';

import './App.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/css/sb-admin-2.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <head>
          {/* Custom fonts for this template */}
          <link href="./assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

          {/* Custom styles for this template */}
          <link href="./assets/css/sb-admin-2.min.css" rel="stylesheet" />
        </head>

        <body>

          <Routes />

        </body>
      </div>
    );
  }
}

export default App;
