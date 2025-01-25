import "./Challenge02.css";
import { useState } from "react";

// id随机数时间戳
// filter只保留满足指定条件的项
//  {...对象，覆盖的属性名：值}
// handle事件命名前缀
// 只用count计数显示完成列表无法对其他现有的清单数据进行继承
// defaultChecked和defaultValue代替selected
// node XX JS运行时
// packge.json删除依赖后npm i可以删除依赖
// . 当前目录下创建项目

// 发送方:支持的ssl和加密方式
// 接收方:选择的ssl和加密方式
// 接收方:数字证书包含的加密公钥
// 接收方:协商部分结束提醒
// 发送方:公钥加密后的premaster共享密钥
// 发送方:提示接下来的交互由共享密钥加密
// 发送方:至今为止的报文整体校验
// 接收方:提示接下来的交互由共享密钥加密
// 接收方:至今为止的报文整体校验
// 发送方:收到服务端的完整校验后，3次握手,验证基于共享密钥的加密解密，ssl连接建立，开始应用层协议通信，即http
// 接收方:http响应
// 发送方:断开连接，发送close_notify报文，这步之后发送TCP FIN报文关闭与TCP通信

function Challenge02() {
  const [toDoItem, setToDoItem] = useState("");
  const [toDOList, setToDoList] = useState([]);
  const [doneCount, setDoneCount] = useState(0); // 条目直接删除存在bug

  function addItem(event) {
    event.preventDefault();

    if (!toDoItem) {
      return;
    }
    setToDoList([...toDOList, [toDoItem, true]]);
    setToDoItem("");
  }

  function ListItem({ done }) {
    return toDOList.map((value, index) => (
      <li
        key={index}
        className={value[1] ? "" : "deleted"}
        style={{ display: done ^ value[1] ? "" : "none" }}
      >
        <input
          type="checkbox"
          checked={!value[1]}
          onChange={() => {
            if (value[1]) {
              setDoneCount(doneCount + 1);
            } else {
              setDoneCount(doneCount - 1);
            }
            setToDoList([
              ...toDOList.slice(0, index),
              [value[0], !value[1]],
              ...toDOList.slice(index + 1),
            ]);
          }}
        />
        {value[0]}{" "}
        <button
          onClick={() => {
            if (!value[1]) {
              setDoneCount(doneCount - 1);
            }
            setToDoList([
              ...toDOList.slice(0, index),
              ...toDOList.slice(index + 1),
            ]);
          }}
        >
          delete
        </button>
      </li>
    ));
  }

  return (
    <main>
      <h1>Todo List</h1>
      <form onSubmit={(event) => addItem(event)}>
        <input
          value={toDoItem}
          onChange={(e) => {
            setToDoItem(e.target.value);
          }}
          type="text"
          placeholder="Add item into as todo"
        />
        <button>Add</button>
      </form>

      <ul>
        <p>ToDo</p>
        <ListItem done={false} />
        {doneCount > 0 && <p>Done</p>}
        <ListItem done={true} />
      </ul>
    </main>
  );
}

export default Challenge02;
