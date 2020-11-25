import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { CountUp } from "./CountUp";
//import { Product } from "./Product";
// import { Event } from "./Event";
import { Events } from "./Events";
import { EventForm } from "./EventForm";
import "./styles.css";
import reducer from "./reducers/index";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <div className="container">
        <EventForm state={state} dispatch={dispatch} />
        <hr />
        <h4>イベント一覧</h4>
        <Events state={state} dispatch={dispatch} />
      </div>
    </>
  );
};
