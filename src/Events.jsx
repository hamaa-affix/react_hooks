import React from "react";
import { Event } from "./Event";

export const Events = (props) => {
  const { state, dispatch } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>ボディー</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state.map((event, index) => (
          <Event key={index} event={event} dispatch={dispatch} />
        ))}
      </tbody>
    </table>
  );
};