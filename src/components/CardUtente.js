import React from 'react';
import { Link } from 'react-router-dom';

function CardUtente(props) {
    const { username, name, email, id } = props.data;
    return (
        <Link className="Link" to={`/${id}`}>
            
            <div className="card__user">
                <div className="card__user__content">

                    <div className="card__user__content__username">{username}</div>
                    <div className="card__user__content__name">{name}</div>
                    <hr />
                    <div className="card__user__content__data">{email}</div>

                </div>
                <div className="card__user__id">{id}</div>
            </div>

        </Link>
    )
}
export default CardUtente;