import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Create = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [contact, setContact] = useState();
  const handleSubmit = async () => {
    const fd = new FormData();
    // Tạo data để gửi lên server
    fd.append("file", selectedFile);
    const res = await axios.post("https://v2.convertapi.com/upload", fd);
    handleChange("image", res.data.Url);

    await axios.post("http://localhost:8080/list", contact).then((res) => {
      alert("Thành Công");
    });
  };
  const handleChange = (prop, value) => {
    setContact({
      ...contact,
      [prop]: value,
    });
  };
  return (
    <div className="container">
      <h1 className="mb-5">Add Contact</h1>
      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="..."
          class="me-3 rounded-circle border"
          width={60}
          height={60}
        />
      )}

      <label className="custom-file-upload btn btn-primary">
        <input
          type="file"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedFile(event.target.files[0]);
          }}
        />
        Add Image
      </label>
      <br />
      <label className="form-label">Name</label>
      <input
        className="form-control"
        style={{ width: "500px" }}
        type="text"
        onChange={(e) => handleChange("name", e.target.value)}
      ></input>
      <label className="form-label mt-2">Email</label>
      <input
        className="form-control"
        style={{ width: "500px" }}
        type="email"
        onChange={(e) => handleChange("email", e.target.value)}
      ></input>
      <label className="form-label mt-2">Phone</label>
      <input
        className="form-control"
        style={{ width: "500px" }}
        type="tel"
        onChange={(e) => handleChange("phone", e.target.value)}
      ></input>
      <Link className="btn btn-primary mt-3 mx-3" to={"/"}>
        Back
      </Link>
      <button className="btn btn-success mt-3" onClick={() => handleSubmit()}>
        Add
      </button>
    </div>
  );
};

export default Create;
