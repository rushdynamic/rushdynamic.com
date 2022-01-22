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
          Hi,{" "}
          <span>
            <span className="im-text">I'm</span>{" "}
            <span className="name-text">Gokul</span>
            <span className="cursor-text">_</span>
          </span>
        </motion.p>
      </div>
    </div>
  )
}
