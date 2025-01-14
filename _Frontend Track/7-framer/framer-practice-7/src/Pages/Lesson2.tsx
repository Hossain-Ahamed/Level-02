import { motion } from "motion/react";
import React from "react";


const parent = {
  hidden : {opacity :0, scale:0.9},
  visible :{opacity :1, scale:1},
}
const child = {
  hidden : {opacity :0, scale : 0.5},
  visible : {opacity : 1, scale : 1},
  transition:{duration:5,ease:'easeInOut',staggerChildren:1 , delayChildren:1}
}
const Lesson2 = () => {
  return (
    <div>
      <motion.div className="size-64 bg-indigo-500 rounded-lg h-full grid grid-cols-2 justify-items-center "
      variants={parent}
      initial="hidden"
      animate="visible"
   
     >
        <motion.div className="size-20 bg-yellow-500 rounded-sm " variants={child}></motion.div>
        <motion.div className="size-20 bg-yellow-500 rounded-sm" variants={child}></motion.div>
        <motion.div className="size-20 bg-yellow-500 rounded-sm" variants={child}></motion.div>
        <motion.div className="size-20 bg-yellow-500 rounded-sm" variants={child}></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson2;
