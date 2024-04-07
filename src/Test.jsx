import React from 'react'
import './app.scss'
import { motion } from 'framer-motion'


const Test = () => {
  return (
    <div className="course">
        <motion.div className="box" animate={{opacity:0.}} transition={{duration:2}}>

        </motion.div>
    </div>
  )
}

export default Test