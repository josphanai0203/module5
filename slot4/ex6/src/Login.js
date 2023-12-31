import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const initialForm = {
        user:"",
        password:""
    }
    const handleChange = (prop,value)=>{
        setLogin({
            ...login,
            [prop]: value
        })
    }
    const [login,setLogin] = useState(initialForm)
    const route = useNavigate();
    const handleLogin = () => {
        console.log(login.password);
        if(login.user == 'admin@gmail.com' && login.password == 'letmein'){
            route('/home');
        }
    };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput
        wrapperClass="mb-4"
        label="Account"
        id="form1"
        type="text"
        onChange={(e)=>handleChange('user',e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
        onChange={(e)=>handleChange('password',e.target.value)}
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Remember me"
        />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={()=>handleLogin()}>Sign in</MDBBtn>

      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>

        <div
          className="d-flex justify-content-between mx-auto"
          style={{ width: "40%" }}
        >
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="facebook-f" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="twitter" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="google" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="github" size="sm" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
};

export default Login;
