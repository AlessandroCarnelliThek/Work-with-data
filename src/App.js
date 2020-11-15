import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ListaUtenti from './components/ListaUtenti.js'
import ListaPosts from './components/ListaPosts.js'

import Intro from './Intro.js';


function App() {

  const [utenti, setUtenti] = useState([]);

  function getUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(responce => responce.json())
      .then(data => setUtenti(data))
  }
  useEffect(getUserData, [])

  return (
    <Router>
      <div className="App">
        <header className="header">Work With DATA</header>

        <div className="list">
          <ListaUtenti data={utenti} />
        </div>

        <div className="main">

          <Route exact path="/" component={Intro} />
          <Route path="/:id" component={ListaPosts} />


        </div>

        <footer className="footer">
          <div className="button__back" ><Link className="Link button__back" to="/">GO BACK</Link></div>

        </footer>
      </div>
    </Router>
  );
}

export default App;
