import React from "react";

function App() {
  const [item, setItem] = React.useState("");

  const [taskList, setTaskList] = React.useState([]);

  function handleItems(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addTasks() {
    setTaskList((task) => {
      return [...taskList, item];
    });
    setItem("");
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
          {taskList.map((addedItem) => {
            return <li>{addedItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
