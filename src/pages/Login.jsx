import React from 'react'
import styled from 'styled-components'
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Main=styled.div`
  display:flex;
  flex-direction:column!important;
  width:30vw;
  height:52vh;
  justify-content:center;
  align-items:center;
  border:3px solid red;
  margin-left:34rem;
  background-color:black;
  box-shadow: 0px 0px 25px 1px red;
  gap:1rem;
  
  h3{
    text-align:center;
    color:white;
    font-size:1.4rem;
  }

  
`


const Login = () => {
  const navigate = useNavigate()

  function Handlelogin(){
    alert("you are successfully login");
      navigate("/cart")
  }
  return (
    <Main>
 
    <h3>  <AppleIcon   sx={{ color: 'white' ,}}/></h3>
  <h3>Login</h3>
  <input
    type="text"
    name="username"
    placeholder="Username"
  />
  <input
    type="password"
    name="password"
    placeholder="Password"
  />
  <button onClick={Handlelogin}>submit</button>
  <p>Not yet registered <Link to ='/register'>clickHere</Link></p> 
    </Main>
  )
}

export default Login