import React, { useState } from "react"
import { motion } from "framer-motion"
import Spinner from "./Spinner.jsx"
import Posts from "../data/projects-data.js"
import Post from "./Post"
import "../styles/posts-styles.scss"

export default function PostGrid() {
  const [loadedImgCount, setLoadedImgCount] = useState(0)
  return (
    <>
      <motion.div
        style={{ display: loadedImgCount >= Posts.length ? "flex" : "none" }}
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
              loadedImgCount={loadedImgCount}
              setLoadedImgCount={setLoadedImgCount}
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
      {loadedImgCount < Posts.length && <Spinner />}
    </>
  )
}
