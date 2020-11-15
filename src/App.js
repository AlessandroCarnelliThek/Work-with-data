import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import BackBar from './components/BackBar.js';
import ListaUtenti from './components/ListaUtenti.js'
import ListaPosts from './components/ListaPosts.js'

import Intro from './components/Intro.js';


function App() {

  return (
    <Router>
      <div className="App">
        <header className="header">
          <Route path="/" component={BackBar}></Route>
        </header>

        <div className="list">
          <ListaUtenti />
        </div>

        <div className="main">

          <Route exact path="/" component={Intro} />
          <Route path="/:id" component={ListaPosts} />

        </div>

        <footer className="footer">
          <BackBar />
        </footer>
      </div>
    </Router>
  );
}

export default App;
