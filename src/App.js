import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

import ListaUtenti from './components/ListaUtenti.js'
import ListaPosts from './components/ListaPosts.js'





//differenze tra link e navlink : è una questione di stile, nav link ha uno stile già impostato....controllare

function App() {

  const [utenti, setUtenti] = useState([]);
  const [posts, setPosts] = useState([]);

  function getUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(responce => responce.json())
      .then(data => setUtenti(data))

  }
  function getPostData() {
    let userId = 2;
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
      .then(responce => responce.json())
      .then(data => setPosts(data))

  }

  useEffect(getUserData, [])
  useEffect(getPostData, [])

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">Work With DATA</header>

        <div className="list">
          <ListaUtenti data={utenti} />
        </div>

        <div className="main">
          <ListaPosts data={posts} />
        </div>

        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
