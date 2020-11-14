function CardUtente(props) {

    return (
        <>
            <div className="card">

                <div className="card__content">

                    <div className="card__content__title">{props.utente.username}</div>
                    <div className="card__content__subtitle">{props.utente.name}</div>
                    <hr />
                    <div className="card__content__data">{props.utente.email}</div>

                </div>

                <div className="card__id">{props.utente.id}</div>

            </div>
        </>
    )
}
export default CardUtente;