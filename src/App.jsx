import React, { useState } from "react";
import "./styles.css";

export const App = (props) => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(props);
  const { name, price } = state;

  const imcrement = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const divade3 = () => (count % 3 === 0 ? setCount(count / 3) : count);
  const chageName = (e) => {
    setState({ ...state, name: e.target.value });
  };
  const restGoods = () => {
    setState(props);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={imcrement}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button onClick={divade3}>３の倍数の時は割ります</button>
      <br />
      <p>
        現在の{name}は、{price}円です
      </p>
      <input value={name} onChange={chageName} placeholder="商品名" />
      <input
        value={price}
        onChange={(e) => setState({ ...state, price: e.target.value })}
        placeholder="金額"
      />
      <button onClick={restGoods}>reset product</button>
    </>
  );
};

App.defaultProps = {
  name: "カツオ",
  price: 1000
};
