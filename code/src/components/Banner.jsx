import React from "react"
import { navigate } from "gatsby"
import "../styles/banner-styles.scss"

export default function Banner() {
  function handleChangePage(e) {
    navigate("/projects")
  }
  return (
    <div className="main-banner">
      <div className="text-container">
        <p className="banner-text" onClick={handleChangePage}>
          Hi, I'm Gokul<span className="cursor-text">_</span>
        </p>
      </div>
    </div>
  )
}
