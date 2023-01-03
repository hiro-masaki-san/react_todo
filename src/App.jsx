import React, { useState } from "react";
import Style from "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompTodos } from "./components/InCompTodos";
import { CompTodos } from "./components/CompTodos";

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

  const onClickComplete = (index) => {
    const newInCompTodos = [...inCompTodos];
    newInCompTodos.splice(index, 1);

    const newCompTodos = [...compTodos, inCompTodos[index]];
    setInCompTodos(newInCompTodos);
    setCompTodos(newCompTodos);
  };

  const onClickInComplete = (index) => {
    const newCompTodos = [...compTodos];
    newCompTodos.splice(index, 1);

    const newInCompTodos = [...inCompTodos, compTodos[index]];
    setInCompTodos(newInCompTodos);
    setCompTodos(newCompTodos);
  };

  return (
    <>
      <InputTodo
        taskInput={taskInput}
        onChangeTaskInput={onChangeTaskInput}
        onClickAdd={onClickAdd}
        disabled={inCompTodos.length >= 5}
      />
      {inCompTodos.length >= 5 && <p>未完了タスクは5件がmax。消化して～！</p>}
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {inCompTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
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
          {compTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickInComplete(index)}>戻す</button>
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
