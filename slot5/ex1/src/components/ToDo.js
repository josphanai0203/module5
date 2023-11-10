import axios from "axios";
import React, { useEffect, useId, useState } from "react";

const ToDo = () => {
  const [list, setList] = useState([]);
  const [todo, settodo] = useState({});
  const handleSubmit = () => {
    if (todo.title !== "") {
        todo.id = list.length + 1;
      axios
        .post("http://localhost:8080/list", todo)
        .then(() => alert("Thành Công"));
    }
  };
  useEffect(() => {
    axios.get("http://localhost:8080/list").then((res) => {
      setList(res.data);
    });
  }, []);
  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        onChange={(e) => settodo({ ...ToDo, ["title"]: e.target.value })}
      />
      <button onClick={() => handleSubmit()}>Submit</button>
      <br></br>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.title} <button style={{ marginLeft: "20px" }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
