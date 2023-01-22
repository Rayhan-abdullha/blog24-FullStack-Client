import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Contex";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";
import { toast } from "react-toastify";

const UserPost = () => {
  const [deletePost, setDeletePost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();

  const { user, allPosts, dispatch } = useContext(Context);
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${deletePost._id || deletePost.id}`, {
        data: { userName: user.userName },
      });
      toast.success("deleted post");
      navigate("/");
      const allData = allPosts.filter(
        (post) => post.id || post._id !== deletePost._id
      );
      dispatch({ type: "FETCH_POST", payload: allData });
    } catch (err) {
      toast.error("Somthing went to wrong");
    }
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/posts/${deletePost._id || deletePost.id}`, {
        userName: user.userName,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      toast.error("something went to wrong");
    }
  };
  let posts = allPosts.filter((v) => v.userName === user.userName);

  return (
    <div className="container postDashbord">
      {posts?.map((post) => (
        <div key={post._id} className="dashbordPost">
          <p>{post.title}</p>
          <div className="editBtn">
            <button onClick={handleUpdate}>Edit</button>
            <button onClick={handleDelete}>Del</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPost;
