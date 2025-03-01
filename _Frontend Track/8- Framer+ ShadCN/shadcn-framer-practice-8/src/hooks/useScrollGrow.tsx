import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
const useScrollGrow = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.3 1"],
    /**
     * "0 1" -> telling initial 0 viewport start , 1 viewport end
     * [1.3, 1] -> when components 1.3x height scrolled, the value will be 1
     */
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacitYValues = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  // const xValue = useTransform(scrollYProgress, [0, 1], [1000, 1]);
  const style = {
    scale: scaleValue,
    opacity: opacitYValues,
    //  x: xValue
  };
  return { componentRef ,style};
};

export default useScrollGrow;
