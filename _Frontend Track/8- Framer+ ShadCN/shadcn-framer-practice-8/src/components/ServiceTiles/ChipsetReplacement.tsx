import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "motion/react";
const ChipsetReplacement = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-100 col-span-6 lg:col-span-5 rounded-2xl h-[415px]"
    ></motion.div>
  );
};

export default ChipsetReplacement;
