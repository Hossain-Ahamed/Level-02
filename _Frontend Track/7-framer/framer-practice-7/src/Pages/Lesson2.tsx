import { useState } from "react";
import { motion } from "framer-motion";

export default function MouseMove3DCard() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    const x = ((clientX - left) / width - 0.5) * 30;
    const y = ((clientY - top) / height - 0.5) * -30;
    
    setRotation({ x, y });
  };

  return (
    <motion.div
      className="w-40 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg"
      style={{ perspective: 1000 }}
      animate={{ rotateX: rotation.y, rotateY: rotation.x }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      Move Mouse
    </motion.div>
  );
}
