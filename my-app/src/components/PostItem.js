import React from 'react';
import css from './css/PostItem.module.css';

function PostItem(props) {

    return (
            props.savedPosts.map(post => {
                return (
                    <div key={post.title} className={css.SearchResults}>
                        <p>
                            Title: {post.title}
                        </p>
                        <p>
                            Artist: {post.name}
                        </p>
                        <img src={post.image} alt={post.description}></img>
                        <p>
                            Description: {post.description}
                        </p>
                    </div>
                )
            })
    )
}

export default PostItem