import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/list").then((res) => setList(res.data));
  }, []);
  const handleEdit = (id) => {};
  const handleDelete = (id, index) => {};
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <span style={{ fontWeight: "bold" }}>Contacts</span>
        <Link className="btn btn-success" to={"/create"}>
          Add a New Contact
        </Link>
      </div>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="content">
            {list.map((b, index) => (
              <tr key={b.id}>
                <td>
                 
                    <img
                      src={URL.createObjectURL(b.image)}
                      alt="..."
                      class="me-3 rounded-circle border"
                      width={60}
                      height={60}
                    />
                
                  {b.name}
                </td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
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
                    onClick={() => handleDelete(b.id, index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
