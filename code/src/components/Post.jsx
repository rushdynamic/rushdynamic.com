import React from "react"

export default function Post(props) {
  return (
    <div className="post-container">
      <div className="post-title">
        <h2>{props.postTitle}</h2>
      </div>
      <div className="post-thumbnail-container">
        <img src={props.postThumbnail} alt="post-thumbnail" height="150" />
      </div>
      <div className="post-description-container">
        <p className="post-description">{props.postDescription}</p>
      </div>
    </div>
  )
}
