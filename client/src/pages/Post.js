import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  let { id } = useParams();
  const [displayPost, setDisplayPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setDisplayPost(response.data);
    });
  });

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title">{displayPost.title}</div>
          <div className="body">{displayPost.postText}</div>
          <div className="footer">{displayPost.username}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  );
}

export default Post;
