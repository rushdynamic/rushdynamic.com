import React from "react"
import { navigate } from "gatsby"
import "../styles/banner-styles.scss"

export default function Banner() {
  return (
    <div className="main-banner">
      <div
        className="text-container"
        onClick={() => {
          navigate("/projects")
        }}
      >
        <p className="banner-text">
          Hi, I'm Gokul<span className="cursor-text">_</span>
        </p>
      </div>
    </div>
  )
}
