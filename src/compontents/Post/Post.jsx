import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({post}) {
  const PF = "https://pure-coast-77675.herokuapp.com/images/";
  return (
    <div className="post">
      <div className="postImages">
      { post.photo && <img
        className="postImg"
        src={PF + post.photo}
        alt=""
      />}
      </div>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{post.categories}</span>
        </div>
        <Link to={`/post/${post._id}`} className="link">
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
