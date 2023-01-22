import React,{useContext, useRef} from 'react'
import "./logIn.css";
import { Context } from "../../context/Contex";
import { toast } from 'react-toastify';
import { axiosInstance } from '../../config';

export default function LogIn() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        userName: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      toast.success("Login successfull")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      toast.error("Something went to wrong")
    }
  };

  return (
    <div className="login">
      <div className="registerWrapper">
        <span className="loginTitle">Login</span>
        <form onSubmit={handleSubmit} className="loginForm">
          <label>Username</label>
          <input 
            className="loginInput" 
            type="text" 
            placeholder="Enter your username..." 
            ref={userRef}
            />
          <label>Password</label>
          <input 
            className="loginInput" 
            type="password" 
            placeholder="Enter your password..." 
            ref={passwordRef}
            />
          <button className="loginButton">Login</button>
        </form>
      </div>
    </div>
  );
}
