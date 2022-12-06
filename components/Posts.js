import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts({ posts }) {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {/* this maps through the posts */}
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
              //   this key value pair provides information from the firestore storage
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          ))}
    </div>
  );
}

export default Posts;
