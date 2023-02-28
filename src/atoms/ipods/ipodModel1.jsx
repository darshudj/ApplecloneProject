import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MemoryIcon from '@mui/icons-material/Memory';
const Main=styled.div`
width:100% ;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
z-index:initial;
border-top:5px solid white;
border-bottom:5px solid white;
background-color: black;



h1{
    font-size: 3.5rem!important;
    color:white ;
}
h4{
    font-size: 1.2rem;
    color: rgb(45, 72, 178);
    margin-top:-.5rem
}
h2{
    margin-top: -2.4rem;
      color:white ;
      font-size: 1.8rem;
}
img{
    width:64%;
}
`
const IpodModel = () => {
  return (
    <>
    <Main>
     <h1>ipad</h1>
      <h2>Loveble.Drawable.Magical</h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://www.buro247.my/images/2022/05/1652187368000621.jpg'} />
    </Main>
    <Main>
     <h1>ipad Pro</h1>
      <h2>Supercharged by <MemoryIcon sx={{fontSize:30}}/></h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://www.apple.com/v/ipad-pro/al/images/meta/ipad-pro_overview__glcw458o4byq_og.png'} />
    </Main>
  
    </>
  )
}

export default IpodModel;