import React from "react"
import "../styles/spinner-styles.scss"

export default function Spinner() {
  return (
    <div className="spinner-container">
      <img src="/spinner.svg" alt="spinner" />
    </div>
  )
}
