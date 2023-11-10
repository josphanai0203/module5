import "./App.css";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function App() {
  const [books, setBooks] = useState([]);
  const [id, setId] = useState(0);
  const initialValue = {
    title: "",
    value: 0,
  };
  const validateForm = Yup.object().shape({
    title: Yup.string().required("Required"),
    value: Yup.number().required("Required"),
  });

  return (
    <div className="container">
      <h1>Library</h1>
      <Formik
        initialValues={initialValue}
        validationSchema={validateForm}
        onSubmit={(value) => {
          setBooks([
            ...books,
            { id: id, title: value.title, value: value.value },
          ]);
          setId(id+1);
        }}
      >
        <Form>
          <div style={{ marginBottom: "20px" }}>
            <label>Tiêu đề</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" as="span"></ErrorMessage>
          </div>
          <div style={{ paddingBottom: "20px" }}>
            <label>Số Lượng</label>
            <Field type="text" name="value" />
            <ErrorMessage name="value"></ErrorMessage>
          </div>
          <button style={{ margin: "8px" }} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Tiêu Đề</th>
            <th>Số Lượng</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.value}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
