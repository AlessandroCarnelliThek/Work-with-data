import React, { useState, useEffect } from 'react';

import Loading from './Loading.js'
import CardPost from './CardPost.js';


function ListaPosts(props) {

    const [posts, setPosts] = useState([]);
    const UserId = props.match.params.id;


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${UserId}`)
            .then(responce => responce.json())
            .then(data => setPosts(data))

    }, [UserId])

    
    if (posts < 1) {
        return <Loading />
    } else {
        return (
            <div>

                <div className="list__title">User id: #{UserId}</div>

                {posts.map((post) => {
                    return <CardPost key={post.id} data={post} />
                })}

            </div>)
    }
}
export default ListaPosts;