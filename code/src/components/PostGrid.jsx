import React from "react"
import { motion } from "framer-motion"
import Posts from "../data/projects-data.js"
import Post from "./Post"
import "../styles/posts-styles.scss"

export default function PostGrid() {
  return (
    <motion.div
      className="posts-outer-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-title-container">
        <h1 className="projects-title">Projects</h1>
        <hr />
      </div>
      <div className="posts-grid-container">
        {Posts.map(post => (
          <Post
            postThumbnail={post.thumbnail}
            postTitle={post.title}
            postDescription={post.description}
            projectUrl={post.url}
            postTags={post.tags}
            key={post.title}
          />
        ))}
      </div>
    </motion.div>
  )
}
