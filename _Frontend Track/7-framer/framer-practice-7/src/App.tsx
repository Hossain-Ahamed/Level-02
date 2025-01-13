import { motion } from "motion/react";
import React from "react";

const initial = {rotate:0};
const animate = {rotate:0};
const App = () => {
  return (
    <div>
      <motion.div className="size-64 bg-indigo-500 rounded-lg"
      initial={initial}
      animate={animate}
      transition={{duration:0,type:'spring'}}></motion.div>
    </div>
  );
};

export default App;
