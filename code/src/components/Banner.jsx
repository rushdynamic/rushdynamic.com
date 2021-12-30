import React from "react"
import "@fontsource/raleway"
import "../styles/banner-styles.scss"

export default function Banner() {
  return (
    <div className="main-banner">
      <div className="text-container">
        <p className="banner-text">
          Hi, I'm <span className="name-text">Gokul</span>
        </p>
      </div>
    </div>
  )
}
