import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <button
        className="bg-red-500 rounded-md"
        onClick={() => setHidden((prev) => !prev)}
      >
        {hidden ? "Show" : "hide"}
      </button>

      {hidden || <Counter />}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

const ToDo = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("", { signal })
      .then((res) => res.json())
      .then((data) => console.log(data));

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};

export default UseEffectExample;
