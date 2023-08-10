import React from "react";
import Todoitems from "./todoitem";

function App() {
  const [item, setItem] = React.useState("");

  const [taskList, setTaskList] = React.useState([]);

  function handleItems(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addTasks() {
    setTaskList(() => {
      return [...taskList, item];
    });
    setItem("");
  }

  function deleteItem(id) {
    setTaskList((prevValue) => {
      return prevValue.filter((eachItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleItems} value={item} />
        <button onClick={addTasks}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {taskList.map((addedItem, index) => {
            return (
              <Todoitems
                todoitem={addedItem}
                onChecked={deleteItem}
                key={index}
                id={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
