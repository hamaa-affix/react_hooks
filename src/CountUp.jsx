import React, { useState } from "react";

export const CountUp = () => {
  const [count, setCount] = useState(0);

  const imcrement = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const divade3 = () => (count % 3 === 0 ? setCount(count / 3) : count);

  return (
    <>
      <p>{count}</p>
      <button onClick={imcrement}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button onClick={divade3}>３の倍数の時は割ります</button>
    </>
  );
};
