import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Tag from "./Tag"

export default function Post(props) {
  const imgRef = useRef(null)

  useEffect(() => {
    if (imgRef.current?.complete) {
      props.setLoadedImgCount(props.loadedImgCount + 1)
    }
  }, [])

  return (
    <motion.div
      className="post-container"
      whileHover={{ scale: 1.05 }}
      onClick={() => window.open(props.projectUrl)}
    >
      <div className="post-title">
        <h2>{props.postTitle}</h2>
      </div>
      <div className="post-thumbnail-container">
        <img
          ref={imgRef}
          src={props.postThumbnail}
          alt="post-thumbnail"
          height="150"
          onLoad={() => props.setLoadedImgCount(props.loadedImgCount + 1)}
        />
      </div>
      <div className="post-description-container">
        <p className="post-description">{props.postDescription}</p>
        <div className="tags-container">
          {props.postTags.map(tag => (
            <Tag tagName={tag} key={tag} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
