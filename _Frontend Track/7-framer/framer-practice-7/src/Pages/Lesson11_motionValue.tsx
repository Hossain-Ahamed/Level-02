import { motion, useMotionValue, useTransform } from "motion/react";

const Lesson11_motionValue = () => {
    const x = useMotionValue(0);
    const opacity = useTransform(x,[0,100,200], [1,0.5,0]);
    const rotate = useTransform(x,[-100,-50,0],[360,180,0])

  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center p-5">
      <motion.div 
      className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
      style={{x,opacity,rotate }}
      drag='x'
      dragConstraints = {{left:0,right : 100}}
      dragSnapToOrigin
      ></motion.div>
    </div>
  );
};

export default Lesson11_motionValue;
