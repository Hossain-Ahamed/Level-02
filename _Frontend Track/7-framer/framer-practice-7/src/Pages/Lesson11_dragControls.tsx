import { useDragControls ,motion} from "motion/react";
import { useRef } from "react";

export default function Lesson11() {
    const dragControls = useDragControls();
    const containerRef = useRef(null); // Ref for parent container
  
    return (
      <div ref={containerRef} className="relative flex items-center justify-center bg-gray-900">
        <button
          className="absolute top-10 px-4 py-2 bg-blue-500 text-white rounded"
          onPointerDown={(e) => dragControls.start(e)}
        >
          Start Dragging
        </button>
  
        <motion.div
          className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
          drag="x"
        //   drag // for all axis
          dragControls={dragControls}
          dragListener={false}
          dragConstraints={containerRef} // ✅ Built-in method for screen constraints
          dragElastic={0.5} // ✅ Bounce effect when reaching the edge
          whileTap={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 300, // Controls how "bouncy" it is
            damping: 20, // Reduces excessive bounce
          }}
        >
          Drag Me
        </motion.div>
      </div>
    );
  }