import React from "react"
import { motion } from "framer-motion"
import "../styles/spinner-styles.scss"

export default function Spinner() {
  return (
    <div className="spinner-container">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        src="/spinner.svg"
        alt="spinner"
      />
    </div>
  )
}
