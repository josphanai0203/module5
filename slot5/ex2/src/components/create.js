import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Create = () => {
  const [book, setBook] = useState({ title: "", quantity: 0 });
  const handleSubmit = () => {
    if (book.title !== "" && book.quantity !== 0) {
      Axios.post("http://localhost:8080/library",book).then(() => {
        alert("Success")
      });
    }
  };
  const handleChange = (prop, value) => {
    setBook({
      ...book,
      [prop]: value
    });
  };
  return (
    <div className="container">
      <h1 className="mb-5">Add a new book</h1>
      <label className="form-label">Title</label>
      <input
        className="form-control"
        style={{ width: "500px" }}
        type="text"
        value={book.title}
        onChange={(e) => handleChange("title", e.target.value)}
      ></input>
      <label className="form-label mt-2">Quantity</label>
      <input
        className="form-control"
        style={{ width: "500px" }}
        type="number"
        value={book.quantity}
        onChange={(e) => handleChange("quantity", e.target.value)}
      ></input>
      <Link className="btn btn-primary mt-3 mx-3" to={'/'}>Back</Link>
      <button className="btn btn-success mt-3" onClick={() => handleSubmit()}>
        Add
      </button>
    </div>
  );
};

export default Create;
