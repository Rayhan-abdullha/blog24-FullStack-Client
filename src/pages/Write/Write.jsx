import React, { useState, useContext } from "react";
import "./write.css";
import { Context } from "../../context/Contex";
import photo from "../../imgaes/profile.jpg";
import { axiosInstance } from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const [categories, setCategories] = useState("");
  const [file, setFile] = useState(null);
  const [selected, setSelected] = useState("others");

  const { dispatch, user, allPosts } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      newId: shortid.generate(),
      userName: user.userName,
      title,
      desc,
      photo: "",
      categories: categories || selected,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {
        toast.error("Credential error");
      }
    }
    try {
      await dispatch({ type: "ADD_POST", payload: newPost });
      navigate("/");
      await axiosInstance.post("/posts", newPost);
      toast.success("successfully post done!");
    } catch (err) {
      toast.error("Credential error");
      const allData = allPosts.filter(
        (post) => post._id !== newPost.newId
      );
      dispatch({ type: "FETCH_POST", payload: allData });
      navigate("/write");
    }
  };
  const handleChange = (e) => {
    setSelected(e.target.value);
    setCategories(e.target.value);
  };
  return (
    <div className="post-section">
      <div className="wrapper">
        <div className="title">Create your Blog</div>
        <form onSubmit={handleSubmit}>
          <div className="categorySelect">
            <p>Rayhan Abdullah</p>
            <select value={selected} onChange={handleChange} id="category">
              <option value="others">others</option>
              <option value="programming">programming</option>
              <option value="music">music</option>
              <option value="politics">politics</option>
              <option value="movies">movies</option>
            </select>
          </div>
          <div className="postInput">
            <input
              className="writeInput"
              id="title"
              autoFocus={true}
              type="text"
              placeholder="Write post title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              name=""
              id="description"
              cols="30"
              rows="10"
              placeholder="Tell me somthig..."
            ></textarea>
          </div>
          <div className="addImg">
            <input
              type="file"
              className="postAvator"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button className="submitBtn" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
