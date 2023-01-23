import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Contex";
import { axiosInstance } from "../../config";
import { toast } from "react-toastify";
import './dashbord.css'
const UserDashbord = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const { user, allPosts, dispatch } = useContext(Context);
  const handleDelete = async (id) => {
    try {
      const allData = allPosts.filter(
        (post) => (post._id || post.newId) !== id
      );
      dispatch({ type: "FETCH_POST", payload: allData });
      await axiosInstance.delete(`/posts/${id}`, {
        data: { userName: user.userName },
      });
      toast.success("deleted post");
    } catch (err) {}
  };

  const handleUpdate = async (id) => {
    try {
      await axiosInstance.put(`/posts/${id}`, {
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
    <div className="container dashboard mb-5">
      <h2 className="my-3 text-danger">Posts Dashboard</h2>
      {posts.length !== 0 ? (
        <div className="postDashbord">
          {posts?.map((post) => (
            <div key={post._id} className="dashbordPost">
              <p>{post.title}</p>
              <div className="editBtn">
                <button onClick={() => setUpdateMode(prev => !prev)}>Edit</button>
                <button onClick={() => handleDelete(post._id ? (post._id) : (post.newId))}>Del</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty_dashbord">
          <p>Empty Dashboard Post</p>
        </div>
      )}
    </div>
  );
};

export default UserDashbord;
