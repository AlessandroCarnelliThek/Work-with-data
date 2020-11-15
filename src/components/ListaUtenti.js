import React from 'react';

import CardUtente from './CardUtente.js';

function ListaUtenti(props) {
    
    const utenti = props.data;

    return (
        <div className='lista-utenti'>

            {utenti.map((utente) => {
                return <CardUtente key={utente.id} data={utente} />
            })}
        </div>)
}
export default ListaUtenti;