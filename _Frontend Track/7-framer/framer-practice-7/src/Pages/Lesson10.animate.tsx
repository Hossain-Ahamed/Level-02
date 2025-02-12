//
import {  useAnimate } from "motion/react";
const Lesson10 = () => {
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    animate([
        [scope.current, {rotate :45}],
        [scope.current, {opacity :0}],
        [scope.current, {rotate :45}],
        [scope.current, {opacity :1}],
    ]);
  };
  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center p-5">
      <div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        ref={scope}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Lesson10;
