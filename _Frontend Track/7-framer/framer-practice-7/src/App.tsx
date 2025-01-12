import { motion } from "motion/react";
import React from "react";

const App = () => {
  return (
    <div>
      <motion.div className="size-64 bg-indigo-500 rounded-lg"
      initial={{rotate:0}}
      animate={{rotate : 360}}
      transition={{ duration: 2, type : 'spring' }}
      ></motion.div>
    </div>
  );
};

export default App;
