import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Events } from "./components/Events";
import { EventForm } from "./components/EventForm";
import "./styles.css";
import reducer from "./reducers/index";
import AppContext from "./contexts/AppContext";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <AppContext.Provider value={"this is Context"}>
        <div className="container">
          <EventForm state={state} dispatch={dispatch} />
          <hr />
          <h4>イベント一覧</h4>
          <Events state={state} dispatch={dispatch} />
        </div>
      </AppContext.Provider>
    </>
  );
};
