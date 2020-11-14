import { useState, useEffect } from 'react';

import CardUtente from './CardUtente.js'

function ListaUtenti() {

    const [utenti, setUtenti] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(responce => responce.json())
            .then(data => setUtenti(data))
    }, []) // le parentesi quadre fanno si che il caricamento venga eseguito una volta sola

    return (
        <div className='lista-utenti'>
            {utenti.map((utente, index) => {
                return <CardUtente key={index} utente={utente} />
            })}
        </div>)
}

export default ListaUtenti;