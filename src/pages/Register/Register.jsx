import React, {useState, useEffect} from 'react'
import "./Register.css"
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Register() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
      if (password.length >= 6 && userName.length > 0 && email.length > 10) {
        try {
          const res = await axios.post("/auth/register", {
            userName,
            email,
            password,
          })
          res.data && window.location.replace("/login")
          toast.success("Registrtion successfull done!")
      } catch (err) {
        setError(true)
        toast.error("Faild registration!")
      }
    } else {
      setError(true)
      if (password.length < 6) {
        toast.error("At least 6 character password!")
      } else {
        toast.error("Please enter username or email")
      }
        
    } 
    
  } 

  return (
    <div className="register">
      <div className="registerWrapper">
      <span className="registerTitle">Register</span>
        <form onSubmit={handleSubmit} className="registerForm">
          <label>Username</label>
          <input 
            className={`registerInput ${error && "errorMsg"}`} 
            type="text" 
            placeholder="Enter your username..."
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input 
            className={`registerInput ${error && "errorMsg"}`}  
            type="email" 
            placeholder="Enter your email..." 
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input 
            className={`registerInput ${error && "errorMsg"}`} 
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerButton">Register</button>
        </form>
      </div>
  </div>
  )
}
