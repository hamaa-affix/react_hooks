import React, { useContext } from "react";
import { DELETE_EVENT, ADD_OPERATION_LOG } from "../actions/index";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

export const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);

  const handleClickDeleteButton = (eventId) => {
    const result = window.confirm(`${eventId}削除しても良いですか？`);
    if (result) {
      dispatch({
        type: DELETE_EVENT,
        id: eventId
      });

      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベントを(id={eventId})削除しました`,
        operationAt: timeCurrentIso8601()
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
