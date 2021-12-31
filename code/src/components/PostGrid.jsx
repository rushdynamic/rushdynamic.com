import React from "react"
import Posts from "../data/projects-data.js"
import Post from "./Post"
import "../styles/posts-styles.scss"

export default function PostGrid() {
  return (
    <div className="posts-outer-container">
      <div className="posts-grid-container">
        {Posts.map(post => (
          <Post
            postThumbnail={post.thumbnail}
            postTitle={post.title}
            postDescription={post.description}
          />
        ))}
      </div>
    </div>
  )
}
