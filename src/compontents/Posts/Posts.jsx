import React from 'react'
import './Posts.css'
import Post from '../Post/Post';
export default function Posts({post}) {
    return (
        <div className="posts">
            {
                post.map(posts => <Post key={posts._id} post={posts}/>)
            }
        </div>
    )
}
