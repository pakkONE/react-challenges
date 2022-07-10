import React from 'react';
import css from './css/PostItem.module.css';

function PostItemAPI(props) {

    return (
            props.savedPosts.map(post => {
                return (
                    <div key={post.id} className={css.SearchResults}>
                        <p>
                            Title: {post.type}
                        </p>
                        <p>
                            Artist: {post.user}
                        </p>
                        <img src={post.webformatURL} alt={post.type}></img>
                        <p>
                            Description: {post.tags}
                        </p>
                    </div>
                )
            })
    )
}

export default PostItemAPI