import "./posts.css";
import Post from "../post/Post";
import { useLocation } from "react-router";
import { useContext } from "react";
import { Context } from "../../context/Contex";
import { queryTransform } from "../../utils/utils";
import NotFound from "../../pages/notFound/NotFound";

export default function Posts() {
  const { isFetching, allPosts } = useContext(Context);
  const location = useLocation();
  let path = location.search;
  path = queryTransform(path);
  let post = allPosts;
  if (path) {
    let cat = post.filter((item) => item.categories == path);
    let author = post.filter((item) => item.userName == path);

    if (author.length) {
      post = author;
    } else {
      post = cat;
    }
  }
  return (
    <div className="posts">
      {post.length !== 0 ? (
        post.map((posts) => <Post key={posts._id} post={posts} />)
      ) : isFetching ? (
        <h4>Empty! There Have No Posts!!</h4>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
