import React, { useState, useEffect } from 'react';

import CardUtente from './CardUtente.js';


function ListaUtenti() {
  const [utenti, setUtenti] = useState([]);
    
   // const utenti = props.data;
   function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(responce => responce.json())
      .then(data => setUtenti(data))
  }
  useEffect(getData, [])

    return (
        <div>
            {utenti.map((utente) => {
                return <CardUtente key={utente.id} data={utente} />
            })}
        </div>)
}
export default ListaUtenti;