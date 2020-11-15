import React from 'react';

function CardPost(props) {
    const { id, title, body } = props.data;

    return (
        <div>
            <div className="card__post">
                <div className="card__post__id">{id}</div>
                <div className="card__post__content">
                    <div className="card__post__content__title">{title}</div>
                    <hr/>
                    <div className="card__post__content__body">{body}</div>
                </div>
            </div>
        </div>
    )
}
export default CardPost;