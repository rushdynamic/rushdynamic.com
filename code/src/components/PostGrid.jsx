import React from "react"
import { motion } from "framer-motion"
import Posts from "../data/projects-data.js"
import Post from "./Post"
import "../styles/posts-styles.scss"

export default function PostGrid() {
  return (
    <div className="posts-outer-container">
      <motion.div
        className="posts-grid-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </div>
  )
}
