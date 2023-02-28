import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MemoryIcon from '@mui/icons-material/Memory';
const Main=styled.div`
width:128% ;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
z-index:initial;
background-color: white;
height:97vh



h1{
    font-size: 3.5rem!important;
    color:black;
}
h4{
    font-size: 1.2rem;
    color: rgb(45, 72, 178);
    margin-top:.5rem
}
h2{
    margin-top: -2.4rem;
      color:black ;
      font-size: 1.8rem;
}
img{
    width:58% !important;
}
`


const AirpodModel = () => {
  return (
    <>
    <Main>
    <img src={'https://technave.com/data/files/article/202110181839536716.jpg'} />
    </Main>
    <Main>
     <h1>Airpod</h1>
      <h2>2nd generation</h2>
    <img src={'https://www.apple.com/v/airpods-2nd-generation/e/images/meta/og__bz8g5g9sbyoi_overview.png'} />
    </Main>
    <Main>
    <img width={"50%"} src={'https://i.ytimg.com/vi/2EmFATpRfnI/maxresdefault.jpg'} />
    </Main>
  
    </>
  )
}

export default AirpodModel;