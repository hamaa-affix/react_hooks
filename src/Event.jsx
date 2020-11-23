import React from "react";

export const Event = ({ event, dispatch }) => {
  const id = event.id;
  const handleClickDeleteButton = (eventId) => {
    dispatch({
      type: "DELETE_EVENT",
      id: id
    });
  };
  return (
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
  );
};
