import React from 'react';
import my_image from './img/pices_logo.jpg'
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Portfolio website</h1>
      <img src={my_image} alt="profile_image"/>
      <h2>Work in progress</h2>

    </div>
  );
}

export default App;
