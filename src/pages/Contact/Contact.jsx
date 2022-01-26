import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaSearch, FaInstagram } from 'react-icons/fa';
export default function Contact() {
    return (
        <div className="contact">
            <h1>Feel free to Contact Us</h1>
            <div className="socialIcon">
                <a href="https://www.facebook.com/profile.php?id=100069345762386" target="_blank">
                    <i className="topIcon"><FaFacebook /></i>
                </a>
                <a href="https://github.com/Rayhan-abdullha" target="_blank">
                    <i className="topIcon"><FaGithub/></i>
                </a>
                <a href="" target="_blank">
                     <i className="topIcon"><FaTwitter /></i>
                </a>
                <a href="" target="_blank">
                    <i className="topIcon"><FaInstagram /></i>
                </a>
            </div>
        </div>
    )
}
