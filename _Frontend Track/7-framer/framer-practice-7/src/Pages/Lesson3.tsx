import { motion } from "motion/react";
import React from "react";


const parent = {
  hidden : {opacity :0, scale:0.9},
  visible :{opacity :1, scale:1},
  transition:{duration:5,ease:'easeInOut'}
}

const Lesson3 = () => {
  return (
    <div>
      <motion.div className="size-64 bg-indigo-500 rounded-lg  grid grid-cols-2 justify-items-center "
      variants={parent}
      initial="hidden"
      animate="visible"
   
     >
      </motion.div>
    </div>
  );
};

export default Lesson3;
 