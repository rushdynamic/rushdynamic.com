import React from "react"
import "../styles/links-styles.scss"

export default function Links() {
  return (
    <div className="links-container">
      <a
        href="https://github.com/RushDynamic/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/gh.png" height="24px" alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/gokulsyam/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/li.png" height="24px" alt="linkedin" />
      </a>
    </div>
  )
}
