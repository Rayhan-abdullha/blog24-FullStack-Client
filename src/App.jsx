import React, {useContext} from 'react'
import LogIn from './pages/logIn/LogIn';
import Register from './pages/register/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Write from './pages/write/Write';
import Profile from './pages/profile/Profile';
import NotFound from './pages/notFound/NotFound';
import { Context } from './context/Contex';
import Footer from './compontents/footer/Footer';
import Contact from './pages/contact/Contact';
import { ToastContainer } from 'react-toastify';
import Navbar from './compontents/navbar/Navbar';
import SinglePost from './pages/singlePost/SinglePost';

export default function App() {
    const {user} = useContext(Context)
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/write" element={user ? <Write/> : <LogIn/>}/>
                    <Route path="/register" element={user ? <Home /> : < Register/>} />
                    <Route path="/login" element={user ? <Home/> : <LogIn/>}/>
                    <Route path="/profile" element={user ? <Profile/> : <Register/>}/>
                    <Route path="/post/:postId" element={<SinglePost/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
            <ToastContainer />
        </React.Fragment>
    )
}
