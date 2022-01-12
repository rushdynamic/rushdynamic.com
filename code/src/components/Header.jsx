import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import "../styles/header-styles.scss"

export default function Header(props) {
  const [curPath, setCurPath] = useState("/")
  useEffect(() => {
    setCurPath(window?.location.pathname)
  }, [])

  return (
    <div className="header-container">
      <h4 onClick={() => navigate("/")}>Rush Dynamic</h4>
      <div className="pages-container">
        <h4
          className={
            curPath.includes("/projects")
              ? "selected-page"
              : "non-selected-page"
          }
          onClick={() => navigate("/projects")}
        >
          projects
        </h4>
        <h4
          className={
            curPath.includes("/about") ? "selected-page" : "non-selected-page"
          }
          onClick={() => navigate("/about")}
        >
          about
        </h4>
      </div>
    </div>
  )
}
