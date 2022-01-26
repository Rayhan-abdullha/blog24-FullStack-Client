import React, {useEffect, useState} from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaSearch, FaInstagram } from 'react-icons/fa';
import './Sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const categoriesData = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        categoriesData()
        
    }, [])
    return (
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT US</span>
                    <img className="sidebarImg" src="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                    <p>This is Blog website. Here you can create post
                        Create profile, you can login and logout. Edite profile
                        and post etc.
                    </p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        {cats.map((c, index) => <Link to={`/?cat=${c.name}`} key={index} className="link">
                                <li className="sidebarListItem">{c.name}</li>
                            </Link>)}
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon"><FaFacebook /></i>
                        <i className="sidebarIcon"><FaGithub/></i>
                        <i className="sidebarIcon"><FaTwitter /></i>
                        <i className="sidebarIcon"><FaInstagram /></i>
                    </div>
                </div>
            </div>
    
    )
}
