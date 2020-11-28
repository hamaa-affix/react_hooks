import React, { useState, useContext } from "react";
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions/index";
import AppContext from "../contexts/AppContext";

export const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("全てを削除しても良いですか？");
    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };

  const unCreatable = title === "" || body === "";
  return (
    <>
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
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベント作成
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのイベント削除
        </button>
      </div>
    </>
  );
};
