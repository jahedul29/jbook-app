import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
import Post from "../Post/Post";
import fakeData from "../../fakeData/index";

const PostDetails = () => {
  const { postId } = useParams();

  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});

  useEffect(() => {
    const loadedComments = fakeData.comments;
    const comments = loadedComments.filter(
      (comment) => comment.postId === parseInt(postId)
    );
    setComments(comments);
  }, [postId]);

  useEffect(() => {
    const loadedPosts = fakeData.posts;
    const post = loadedPosts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return (
    <div>
      <div>
        <Post post={post}></Post>
      </div>
      <div>
        <h3 style={{ marginLeft: "15%" }}>Comments</h3>

        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
