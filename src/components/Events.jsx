import React, { useContext } from "react";
import { Event } from "./Event";
import AppContext from "../contexts/AppContext";

export const Events = (props) => {
  const value = useContext(AppContext);
  const { state, dispatch } = props;
  return (
    <>
      <div>{value}</div>
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
    </>
  );
};
