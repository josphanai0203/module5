import { Formik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { useState } from "react";
function App() {
  const [form, setForm] = useState({});
  const initialValue = {
    to: "",
    title: "",
    message: "",
  };
  const validateForm =Yup.object().shape({
    title:Yup.string().required("Required"),
    email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"lỗi"),
    message: Yup.string().required("Required")
  });
  return (
    <div>
      <h1>Contact Form</h1>
    </div>
  );
}

export default App;
