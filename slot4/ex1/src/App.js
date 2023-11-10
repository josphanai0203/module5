import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
function App() {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const validateForm =Yup.object().shape({
    email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"lỗi")
  });
  return (
    <div>
      <h1>Contact Form</h1>
      <Formik validationSchema={validateForm} initialValues={initialValue} onSubmit={(value)=>{
        
      }}>
        <Form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <Field
              name="name"
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Email</label>
            <Field
              name="email"
              type="text"
             
            />
            <ErrorMessage name="email"></ErrorMessage>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Phone</label>
            <Field
              name="phone"
              type="text"
            />
           
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Message</label>
            <Field as='textarea'
              name="message"
             
            />
            
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
