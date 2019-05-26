import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './Topbar'
import SwipeableTemporaryDrawer from './Drawer'
import MediaCard from './ClassCard'
import Checkout from './Form'

import FloatingActionButtons from './TaskMapBuilder'

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <SwipeableTemporaryDrawer/>

      <FloatingActionButtons/>

      <Checkout/>

      <MediaCard/><br/>
      <MediaCard/><br/>
      <MediaCard/><br/>

    {/*
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    */}


    </div>
  );
}

export default App;
