import React, { useState, useEffect } from "react";

export const Product = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("this is only to change namePropaty");
  }, [name]);

  const chageName = (e) => {
    setState({ ...state, name: e.target.value });
  };
  const restGoods = () => {
    setState(props);
  };
  return (
    <>
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

Product.defaulProps = {
  name: "",
  price: null
};
