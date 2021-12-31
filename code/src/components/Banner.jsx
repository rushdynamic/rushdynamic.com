import React from "react"
import { navigate } from "gatsby"
import { motion } from "framer-motion"
import "../styles/banner-styles.scss"

export default function Banner() {
  function handleChangePage(e) {
    navigate("/about")
  }
  return (
    <div className="main-banner">
      <div className="text-container">
        <motion.p
          className="banner-text"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleChangePage}
        >
          Hi, I'm Gokul<span className="cursor-text">_</span>
        </motion.p>
      </div>
    </div>
  )
}
