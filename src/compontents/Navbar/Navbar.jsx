import React, {useContext, useState, useEffect} from "react"
import { Link } from "react-router-dom";
import demoProfilePic from '../../imgaes/profile.jpg'
import { Context } from "../../context/Contex";
import './navbar.css'
import { toast } from "react-toastify";

export default function Navbar() {
    const [show, setShow] = useState(true)
    const {user, dispatch} = useContext(Context);

    const PF = "https://blog24-server-app.onrender.com/images/";
    const handleLogOut = () => {
        dispatch({type:"LOGOUT"})
        toast.success("Logout")
    }

    const showButton = () => {
        if (window.innerWidth <= 992) {
            setShow(true);
        }         
    }
    useEffect(() => {
        showButton()
    },[])
    window.addEventListener("resize", showButton);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand"><h3><span className="logoB">B</span>LOG-24</h3></Link>
                <button onClick={() => setShow((prev) => !prev)} className="navbar-toggler" type="button">
                {show ? (<span className="navbar-toggler-icon navReverse2"></span>) :
                    (<span className="navbar-toggler-icon navReverse"></span>)
                }
                </button>
                <div className={`navbar-collapse justify-content-end ${show ? "showWrapper" : "showWrapper2"}`}>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item" onClick={showButton}>
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item" onClick={showButton}>
                            <Link to="/write" className="nav-link">Write</Link>
                        </li>
                        <li className="nav-item" onClick={showButton}>
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item" onClick={showButton}>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        {
                            user && <li className="nav-item" onClick={showButton}>
                                <Link onClick={handleLogOut} to="/login" className="logout nav-link">{user && "Logout"}</Link>
                            </li>
                        }
                        <li className={`nav-item nav-link ${user && "profilePic"}`}>
                            {
                            user ? <Link to="/profile" onClick={showButton}>
                            <img className="signInImg"
                            src={user.profilePic ? (PF + user.profilePic) : demoProfilePic} alt=""/>
                            </Link>
                            : <div className="menuList">
                                <li className="singleMenu" onClick={showButton}><Link to="/login">Login</Link></li>
                                <li className="singleMenu" onClick={showButton}><Link to="/register">SignUp</Link></li>
                            </div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    )
}
