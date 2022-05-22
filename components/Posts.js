import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;

// dummy data
// const posts = [
//   {
//     id: "213",
//     username: "linorp",
//     userImg:
//       "https://lh3.googleusercontent.com/a-/AOh14Gie9IzPGXSEOWIkU3AqpoS2GPRsbL1ivyUOPGSRcg=s83-c-mo",
//     img: "https://picsum.photos/1000",
//     caption: "This is indonesia!",
//   },
//   {
//     id: "123",
//     username: "uioor",
//     userImg:
//       "https://lh3.googleusercontent.com/a-/AOh14Gie9IzPGXSEOWIkU3AqpoS2GPRsbL1ivyUOPGSRcg=s83-c-mo",
//     img: "https://picsum.photos/1000",
//     caption: "This is indonesia!",
//   },
//   {
//     id: "124",
//     username: "Kichuno",
//     userImg:
//       "https://lh3.googleusercontent.com/a-/AOh14Gie9IzPGXSEOWIkU3AqpoS2GPRsbL1ivyUOPGSRcg=s83-c-mo",
//     img: "https://picsum.photos/1000",
//     caption: "This is indonesia!",
//   },
// ];
