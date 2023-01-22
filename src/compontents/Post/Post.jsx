import { Link } from "react-router-dom";
import "./post.css";
import blog from '../../imgaes/blog.jpg'

export default function Post({post}) {
  const PF = "https://blog24-server-app.onrender.com/images/";
  return (
    <div className="post">
      <div className="postImages">
      { post.photo ? (<img
        className="postImg"
        src={PF + post.photo}
        alt=""
      />) : (<div className="postImages">
        <img
        className="postImg"
        src={blog}
        alt="not found"
      />
      </div>)}
      </div>
      <div className="postInfo">
        <div className="postCats">
          <Link to={`?cat=${post.categories}`}><span className="postCat">{post.categories}</span></Link>
        </div>
        <Link to={`/post/${post.id || post._id}`} className="link">
          <span className="postTitle">
              {post.title}
          </span>
        </Link>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
       {post.desc}
      </p>
    </div>
  );
}
