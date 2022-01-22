import React from "react"
import { Helmet } from "react-helmet"
import "../styles/global-styles.scss"
import "@fontsource/raleway"
import "@fontsource/jetbrains-mono"
import "@fontsource/rubik"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Links from "../components/Links"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="icon" href="/favicon.ico" />
        <title>Rush Dynamic</title>
        <link rel="canonical" href="https://rushdynamic.com/" />
      </Helmet>
      <div className="global-container">
        <Header />
        <Banner />
        <Links />
      </div>
    </>
  )
}
