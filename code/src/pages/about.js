import React from "react"
import { Helmet } from "react-helmet"
import "../styles/global-styles.scss"
import Header from "../components/Header"
import About from "../components/About"
import Links from "../components/Links"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rush Dynamic</title>
        <link rel="canonical" href="https://rushdynamic.com/projects" />
      </Helmet>
      <div className="global-container">
        <Header />
        <About />
        <Links />
      </div>
    </>
  )
}
