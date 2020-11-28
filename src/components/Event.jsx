import React, { useContext } from "react";
import { DELETE_EVENT } from "../actions/index";
import AppContext from "../contexts/AppContext";

export const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);

  const handleClickDeleteButton = (eventId) => {
    const result = window.confirm(`${eventId}削除しても良いですか？`);
    if (result) {
      dispatch({
        type: DELETE_EVENT,
        id: eventId
      });
    }
  };
  return (
    <>
      <tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleClickDeleteButton(event.id)}
          >
            削除
          </button>
        </td>
      </tr>
    </>
  );
};
