import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* This navbar is above every route because of this*/}
        <Navbar />

        {/* All the routes display their corresponding components here. 
            It's like having a bunch of components, and they just swap out every time
            a different route is hit.
         */}
        {routes}
      </div>
    );
  }
}

export default App;
