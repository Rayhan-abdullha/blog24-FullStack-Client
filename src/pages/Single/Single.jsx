import React from 'react'
import Sidebar from '../../compontents/Sidebar/Sidebar';
import SinglePost from '../../compontents/SinglePost/SinglePost';
import './Single.css'

export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}
