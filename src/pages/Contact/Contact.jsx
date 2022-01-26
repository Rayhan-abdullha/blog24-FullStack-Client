import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaSearch, FaInstagram } from 'react-icons/fa';
export default function Contact() {
    return (
        <div className="contact">
            <h1>Feel free to Contact Us</h1>
            <div className="socialIcon">
                <i className="topIcon"><FaFacebook /></i>
                <i className="topIcon"><FaGithub/></i>
                <i className="topIcon"><FaTwitter /></i>
                <i className="topIcon"><FaInstagram /></i>
            </div>
        </div>
    )
}
