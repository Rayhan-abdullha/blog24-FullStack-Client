import React, {useContext} from 'react'
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Write from './pages/Write/Write';
import Single from './pages/Single/Single';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import { Context } from './context/Contex';
import Footer from './compontents/Footer/Footer';
import Contact from './pages/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import Navbar from './compontents/Navbar/Navbar';
import About from './pages/About/About';

export default function App() {
    const {user} = useContext(Context)
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/write" element={user ? <Write/> : <LogIn/>}/>
                    <Route path="/register" element={user ? <Home /> : < Register/>} />
                    <Route path="/login" element={user ? <Home/> : <LogIn/>}/>
                    <Route path="/profile" element={user ? <Profile/> : <Register/>}/>
                    <Route path="/post/:postId" element={<Single/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
            <ToastContainer />
        </React.Fragment>
    )
}
