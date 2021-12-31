import React from "react"
import "../styles/about-styles.scss"

export default function About() {
  return (
    <div className="about-container">
      <div className="about-name-container">
        <h1>Gokul Syam</h1>
      </div>
      <div className="about-summary-container">
        <p>Front-end, back-end, and everything in between.</p>
        <p>
          Find me on{" "}
          <a
            href="https://www.linkedin.com/in/gokulsyam/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/RushDynamic/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  )
}
