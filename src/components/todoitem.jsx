import React from "react";

function Todoitems(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.todoitem}</li>
    </div>
  );
}

export default Todoitems;
