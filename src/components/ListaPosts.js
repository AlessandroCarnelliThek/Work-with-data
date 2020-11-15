import React from 'react';

import Loading from './Loading.js'
import CardPost from './CardPost.js';


function ListaPosts(props) {
    
    const posts = props.data;

    if (posts < 1) {
        return <Loading />
    } else {
        return (
            <div className='lista-Posts'>
                <div>Post Utente </div>

                {posts.map((post) => {
                    return <CardPost key={post.id} data={post} />
                })}
            </div>)
    }
}
export default ListaPosts;