import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const item = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19898940/pexels-photo-19898940/free-photo-of-close-up-of-an-owl-perching-in-a-hollow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id, corporis doloribus cumque sapiente porro, in aliquam quisquam beatae hic fuga ullam tenetur fugiat! Aut recusandae rerum accusamus ut praesentium?",
  },
  {
    id: 2,
    title: "Next.js Blogs",
    img: "https://images.pexels.com/photos/17559940/pexels-photo-17559940/free-photo-of-woman-in-black-dress-leaning-on-couch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id, corporis doloribus cumque sapiente porro, in aliquam quisquam beatae hic fuga ullam tenetur fugiat! Aut recusandae rerum accusamus ut praesentium?",
  },
  {
    id: 3,
    title: "Movie App ",
    img: "https://images.pexels.com/photos/18176651/pexels-photo-18176651/free-photo-of-fisherman-on-fishing-boat-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id, corporis doloribus cumque sapiente porro, in aliquam quisquam beatae hic fuga ullam tenetur fugiat! Aut recusandae rerum accusamus ut praesentium?",
  },
  {
    id: 1,
    title: "JavaScript App",
    img: "https://images.pexels.com/photos/19797646/pexels-photo-19797646/free-photo-of-a-woman-sitting-in-the-driver-s-seat-of-a-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id, corporis doloribus cumque sapiente porro, in aliquam quisquam beatae hic fuga ullam tenetur fugiat! Aut recusandae rerum accusamus ut praesentium?",
  },
  {
    id: 1,
    title: "JavaScript App",
    img: "https://images.pexels.com/photos/19797646/pexels-photo-19797646/free-photo-of-a-woman-sitting-in-the-driver-s-seat-of-a-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id, corporis doloribus cumque sapiente porro, in aliquam quisquam beatae hic fuga ullam tenetur fugiat! Aut recusandae rerum accusamus ut praesentium?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" ref={ref}>
            <motion.img src={item.img} alt="" style={{ y }}/>
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
