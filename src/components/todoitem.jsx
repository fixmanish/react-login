import React from "react";

function Todoitems(props) {
  const [isdone, setdone] = React.useState(false);

  function handleClick() {
    setdone((prev) => {
      return !prev;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isdone ? "line-through" : "none" }}>
        {props.todoitem}
      </li>
    </div>
  );
}

export default Todoitems;
