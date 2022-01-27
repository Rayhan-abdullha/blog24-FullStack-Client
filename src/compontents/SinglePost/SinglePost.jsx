import React, {useState, useContext, useEffect} from 'react'
import './SinglePost.css'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Contex';
import Spinner from '../Spinner/Spinner';
import { axiosInstance } from '../../config';

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState({});
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axiosInstance.get("/posts/" + path);
            setSinglePost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    const PF = "https://pure-coast-77675.herokuapp.com/images/";

    const handleDelete = async () => {
        try {
          await axiosInstance.delete(`/posts/${singlePost._id}`, {
            data: { userName: user.userName },
          });
          window.location.replace("/");
        } catch (err) {}
      };

    const handleUpdate = async () => {
        try {
            await axiosInstance.put(`/posts/${singlePost._id}`, {
              userName: user.userName, title, desc
            });
            setUpdateMode(false)
          } catch (err) {}
    }
    return (
        singlePost.title ? <div className="singlePost">
        <div className="singlePostWrapper">
            {
                singlePost.photo && <img className="singlePostImg" 
                src={PF + singlePost.photo} alt="notfound"/>
            }
            {updateMode ? <input className="singlePostTitleInput"
             type="text" value={title}
              onChange={(e) => setTitle(e.target.value)}
               autoFocus/>
                : (<h1 className="singlePostTitle">{title}
                {singlePost.userName === user?.userName &&
                <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit" onClick={() => setUpdateMode(true)}></i>
                    <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete}></i>
                </div>
                } 
            </h1>)
            }
            <div className="singlePostInfo">
                <Link to={`/?user=${singlePost.userName}`}>
                    <span className="singlePostAuthor">Author: <b/>{singlePost.userName}</span>
                </Link>
                <span className="singlePostDate">{new Date (singlePost.updatedAt).toDateString()}</span>
            </div>
            {
                updateMode ? (<textarea 
                    cols="30" rows="10" 
                    className="singlePostDescInput" 
                    value={desc} 
                    onChange={(e) => setDesc(e.target.value)}>
                    </textarea>)
                    : (<p className="singlePostDesc">{desc}</p>)
            }
            { updateMode && <button onClick={handleUpdate} className="singlePostBtn">Update</button> }
        </div>
    </div> : <Spinner/>
        
    )
}
