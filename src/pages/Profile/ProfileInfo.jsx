import React, {useContext, useState, useEffect} from 'react'
import "./profile.css";
import { Context } from "../../context/Contex";
import profilePic from '../../imgaes/profile.jpg'
import { toast } from "react-toastify";
import { axiosInstance } from '../../config';

export default function ProfileInfo() {
  const [file, setFile] = useState(null);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user, dispatch } = useContext(Context);
  const PF = "https://blog24-server-app.onrender.com/images/";
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    let updatedUser = {
      userId: user._id,
      userName: userName || user.userName,
      email: email || user.email,
      profilePic: user.profilePic
    }
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {
        toast.error("Bad user Credential")
      }
    }
    try {
      const res = await axiosInstance.put("/users/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      toast.success("Update successfully done!")
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      toast.error("Bad user Credential")
    }
  };
  return (
    <div className="container profile">
      <div className="profileWrapper">
        <div className="profileTitle">
          <span className="profileUpdateTitle">Update Your Account</span>
        </div>
        <form className="profileForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="profilePP">
            <img
              src={file ? URL.createObjectURL(file) : user.profilePic ? (PF+user.profilePic) : (profilePic)}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="profilePPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="singlePostBtn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}