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
        </div>
      </AppContext.Provider>
    </>
  );
};
