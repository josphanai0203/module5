import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Library = () => {
  const [library, setLibrary] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/library").then((res) =>
      setLibrary(res.data)
    );
  }, [library]);
  const handleEdit = (id) => {console.log(id)};
  const handleDelete = (id,index) => {
    axios.delete("http://localhost:8080/library/"+id).then((res) =>{
       library.splice(index, 1);
    })
  };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <span style={{ fontWeight: "bold" }}>Library</span>
        <Link className="btn btn-success" to={"/create"}>
          Add a New Book
        </Link>
      </div>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="content">
            {library.map((b,index) => (
              <tr key={b.id} id={b.id}>
                <td>{b.title}</td>
                <td>{b.quantity}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    ids={b.id}
                    onClick={() => handleEdit(b.id)}
                  >
                    Edit
                  </button>{" "}
                  <button
                   className="btn btn-danger"
                   ids={b.id}
                   onClick={()=>handleDelete(b.id,index)}
                   >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;
