import React, { useContext } from "react";
import { Event } from "./Event";
import AppContext from "../contexts/AppContext";

export const Events = () => {
  const { state } = useContext(AppContext);
  return (
    <>
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
          {state.events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};
