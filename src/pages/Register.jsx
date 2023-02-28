import React from 'react'
import { Validate } from "../assets/validation";
import { useState } from 'react';
import styled from 'styled-components';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Main=styled.div`
  display:flex;
  flex-direction:column;
  width:30vw;
  height:52vh;
  justify-content:center;
  align-items:center;
  border:3px solid red;
  margin-left:34rem;
  background-color:black;
  box-shadow: 0px 0px 25px 1px red;
  
  h3{
    text-align:center;
    color:white;
    font-size:1.4rem;
  }

  
`

const Register = () => {

  const initialValues = { username: "", email: "", phone: "", password: "" };
  const [formvalues, setformvalues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const navigate = useNavigate()

  function handleChange(e) {
    const {name,value}=e.target;
    setformvalues({...formvalues,[name]:value});
  }
  const userData = JSON.parse(localStorage.getItem("credentials")) || [];
  function handleSubmit(e){
    e.preventDefault();
    setformErrors(Validate(formvalues));
    localStorage.setItem("credentials",JSON.stringify(...userData,formvalues));
    alert("you are successfully Registered");
    navigate("/login")
  }
  return (
  <Main>
  <form onSubmit={handleSubmit}>
  <h3>  <AppleIcon   sx={{ color: 'white' ,}}/></h3>
  <h3>Register</h3>
  <input
    type="text"
    name="username"
    placeholder="Username"
    value={formvalues.username}
    onChange={handleChange}
  />
  <p style={{color:"red"}}>{formErrors.username}</p>
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formvalues.email}
    onChange={handleChange}
  />
  <p style={{color:"red"}}>{formErrors.email}</p>
  <input
    type="phone"
    name="phone"
    placeholder="Phone"
    value={formvalues.phone}
    onChange={handleChange}
  />
  <p style={{color:"red"}}>{formErrors.phone}</p>
  <input
    type="password"
    name="password"
    placeholder="Password"
    value={formvalues.password}
    onChange={handleChange}
  />
  <p style={{color:"red"}}>{formErrors.password}</p>
  <button >submit</button>
 <p>Alredy registered <Link to ='/login'>clickHere</Link></p> 

</form>
  </Main>
  )
}

export default Register;