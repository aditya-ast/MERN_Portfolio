import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {

  const formref = useRef();
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  // for send email use open emailjs.com
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ihq6rqs', 'template_pov9j1m', form.current, 'RF0bMwJj2WOsQ3Vfl')
      .then((result) => {
          setSuccess(true)
      }, (error) => {
          setError(true)
      });
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants} whileHover = {{ color: "orange"}}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>adisingh7478@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Rajasthan</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91-6378283594</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 64 64" fill="none">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M8 25a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4c0-4 4-4 8-4s8 0 8 4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4c0-10-4-14-24-14S8 15 8 25z"
            />
            <motion.circle
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              cx="32"
              cy="37"
              r="8"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="m16 29-3.91 11.73A9.32 9.32 0 0 0 20.94 53h22.12a9.32 9.32 0 0 0 8.85-12.27L48 29"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formref}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          {/* <input type="Number" maxLength={10}  required placeholder='Mobile Number'/> */}
          <textarea rows="8" placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
