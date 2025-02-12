
import { useMotionValueEvent, useScroll } from 'motion/react';
import { motion } from 'motion/react';


const Lesson12_Scroll = () => {

const {scrollY,scrollYProgress} = useScroll();

useMotionValueEvent(scrollY, "change", (e) => {
    console.log("animation started on y",e)
  })
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("y changed to", latest)
  })
  return (
    <motion.div >
    <h1>Progress</h1>
    </motion.div>

  );
};

export default Lesson12_Scroll;
