import { motion } from "motion/react";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
  hover: { scale: 1.4, duration: 1 },
  tap: { scale: 1.1, rotate: 200,duration:120 },
};

const Lesson3 = () => {
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg  "
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
    </div>
  );
};

export default Lesson3;
