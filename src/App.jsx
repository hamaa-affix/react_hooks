import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Events } from "./components/Events";
import { EventForm } from "./components/EventForm";
import { OperationLogs } from "./OperationLogs";
import "./styles.css";
import reducer from "./reducers/index";
import AppContext from "./contexts/AppContext";

export const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <AppContext.Provider
        value={{
          dispatch,
          state
        }}
      >
        <div className="container">
          <EventForm />
          <hr />
          <h4>イベント一覧</h4>
          <Events />
          <OperationLogs />
        </div>
      </AppContext.Provider>
    </>
  );
};
