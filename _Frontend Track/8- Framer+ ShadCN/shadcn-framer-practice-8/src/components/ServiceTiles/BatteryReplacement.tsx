import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "motion/react";


const BatteryReplacement = () => {
  const {componentRef,style} = useScrollGrow()
    return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-700 col-span-12 rounded-2xl h-[415px]"
    >
     
    </motion.div>
  );
};

export default BatteryReplacement;

