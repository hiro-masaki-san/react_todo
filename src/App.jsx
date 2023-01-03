import React from "react";
import Style from "./styles.css";

const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        　<p className="title">未完了のTodo</p>
        <ul>
          <div>
            <li className="list-row">
              <p>サンプル1</p>
              <button>完了</button>
              <button>削除</button>
            </li>
            <li className="list-row">
              <p>サンプル2</p>
              <button>完了</button>
              <button>削除</button>
            </li>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        　<p className="title">完了したTodo</p>
        <ul>
          <div>
            <li className="list-row">
              <p>サンプル3</p>
              <button>戻す</button>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default App;
