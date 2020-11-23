import React, { useState, useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { CountUp } from "./CountUp";
//import { Product } from "./Product";
import { Event } from "./Event";
import "./styles.css";
import reducer from "./reducers/index";

export const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_EVENT",
      title,
      body
    });
    setTitle("");
    setBody("");
    //disopatch
    //action = {
    //   type: "CREATE_EVENT",
    //   title,
    //   body
    // }
    console.log("event on fire");
  };
  return (
    <>
      <div className="container">
        <h4>イベント作成</h4>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <br />
          <button className="btn btn-primary" onClick={addEvent}>
            イベント作成
          </button>
          <button className="btn btn-danger">イベント削除</button>
          <br />
          <hr />
          <h4>イベント一覧</h4>
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
        </div>
      </div>
    </>
  );
};
