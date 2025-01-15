import { motion } from "motion/react";
const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 0.6, scale: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
  hover : { opacity: 1,duration:0.5},

};

const Lesson4 = () => {
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg  "
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover='hover'
        // whileTap='tap'
         drag="x"
         dragConstraints={{ left: 0, right: 400 }}
      ></motion.div>
    </div>
  );
};
export default Lesson4;
