import React from "react"
import "../styles/global-styles.scss"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Links from "../components/Links"

export default function Home() {
  return (
    <div className="global-container">
      <Header />
      <Banner />
      <Links />
    </div>
  )
}
