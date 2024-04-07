import { useState } from 'react'
import React from 'react'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { motion } from 'framer-motion'
import "./sidebar.scss"

const Sidebar = () => {


  const [open, setOpen] = useState(false)

  const variants = {
    open: {
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping:40,
      },
    },
  }

  return (
    <motion.div className="sidebar" animate={ open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar