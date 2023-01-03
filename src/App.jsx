import React, { useState } from "react";
import Style from "./styles.css";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [inCompTodos, setInCompTodos] = useState(["sample1", "sample2"]);
  const [compTodos, setCompTodos] = useState(["sample3"]);

  const onChangeTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  const onClickAdd = () => {
    if (taskInput === "") return;
    setInCompTodos([...inCompTodos, taskInput]);
    setTaskInput("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompTodos];
    newTodos.splice(index, 1);
    setInCompTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Todoを入力"
          onChange={onChangeTaskInput}
          value={taskInput}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {inCompTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTodo</p>
        <ul>
          {compTodos.map((todo) => {
            return (
              <div key={todo}>
                <li className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
