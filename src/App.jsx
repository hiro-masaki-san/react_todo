import React, { useState } from "react";
import Style from "./styles.css";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [compTodos, setCompTodos] = useState(["sample1", "sample2"]);
  const [inCompTodos, setInCompTodos] = useState(["sample3"]);

  const onChangeTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  const onClickAdd = () => {
    if (taskInput === "") return;
    setCompTodos([...compTodos, taskInput]);
    setTaskInput("");
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
          {compTodos.map((todo) => {
            return (
              <div key={todo}>
                <li className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTodo</p>
        <ul>
          {inCompTodos.map((todo) => {
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
