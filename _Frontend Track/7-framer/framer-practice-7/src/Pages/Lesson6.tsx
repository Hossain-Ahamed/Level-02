import { motion, useAnimationControls } from "motion/react";

const Lesson6 = () => {
  const controls = useAnimationControls();
  const handleFroward = () => {
    controls.start({ x: 200 });
  };
  const handleBackward = () => {
    controls.start({ x: -200 });
  };
  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center p-5">
      <div className="w-full flex justify-center gap-5 items-center  mb-10">
        <button
          onClick={handleFroward}
          className="bg-green-500 text-white px-4 py-3 rounded-md font-semibold"
        >
          Forward
        </button>
        <button
          onClick={handleBackward}
          className="bg-green-500 text-white px-4 py-3 rounded-md font-semibold"
        >
          Backward
        </button>
      </div>

      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default Lesson6;
