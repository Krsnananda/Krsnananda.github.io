import React from 'react';
import './App.scss';
import Menu from './components/menu/Menu';
import Home from './components/Home';
import Firefly from './components/Firefly';

export default function App() {
  return (
      <div className="App">
        <header>
          <Menu/>
        </header>
        <body>
          <Home />
          <Firefly />
        </body>
      </div>
  );
}


