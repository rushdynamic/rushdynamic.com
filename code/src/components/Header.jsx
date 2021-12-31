import React from "react"
import { navigate } from "gatsby"
import "../styles/header-styles.scss"

export default function Header(props) {
  return (
    <div className="header-container">
      <h4 onClick={() => navigate("/")}>Rush Dynamic</h4>
      <div className="pages-container">
        <h4 onClick={() => navigate("/projects")}>projects</h4>
        <h4 onClick={() => navigate("/about")}>about</h4>
      </div>
    </div>
  )
}
