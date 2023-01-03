import React from "react";

export const InputTodo = (props) => {
  const { taskInput, onChangeTaskInput, onClickAdd, disabled } = props;
  const inputArea = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px",
  };

  return (
    <div style={inputArea}>
      <input
        disabled={disabled}
        placeholder="Todoを入力"
        onChange={onChangeTaskInput}
        value={taskInput}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
