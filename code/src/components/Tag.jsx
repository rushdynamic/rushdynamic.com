import React from "react"
import "../styles/tags-styles.scss"

export default function Tag(props) {
  return <div className="tag-inner-container">{props.tagName}</div>
}
