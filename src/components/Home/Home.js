import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Home.css";
import fakeData from "../../fakeData/index";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const loadedPosts = fakeData.posts;
    setAllPosts(loadedPosts);
  }, []);

  return (
    <div>
      {allPosts.map((post) => (
        <Post key={post.id} post={post}>
          <Link key={post.id} className="link-style" to={`/post/${post.id}`}>
            <Button variant="contained" size="small" color="primary">
              See More...
            </Button>
          </Link>
        </Post>
      ))}
    </div>
  );
};

export default Home;
