import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">You can Post your won Blog</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg"
            src="https://images.unsplash.com/photo-1493219686142-5a8641badc78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="notfound"/>
        </div>
    )
}
