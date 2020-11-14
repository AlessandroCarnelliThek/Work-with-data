import React from 'react';
import { BrowserRouter, NavLink, Switch, Route, useParam } from 'react-router-dom'

import Loading from './components/Loading.js';
import ListaUtenti from './components/ListaUtenti.js'




//differenze tra link e navlink : è una questione di stile, nav link ha uno stile già impostato....controllare

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">Work With DATA</header>

        <div className="list">
          <ListaUtenti />
        </div>

        <div className="main">
          
          <Loading />
        </div>

        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
