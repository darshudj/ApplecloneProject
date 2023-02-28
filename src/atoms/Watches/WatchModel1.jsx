import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AppleIcon from '@mui/icons-material/Apple';

const Main=styled.div`
width:132% ;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
z-index:initial;
border-top:5px solid white;
border-bottom:5px solid white;
background-color: white;



h1{
    font-size: 3.5rem!important;
    color:black ;
}
h4{
    font-size: 1.2rem;
    color: rgb(45, 72, 178);
    margin-top:-.5rem
}
h2{
    margin-top: -2.4rem;
      color:black ;
      font-size: 1.8rem;
}
img{
    width:64%
}
`
const WatchModel = () => {
  return (
    <>
    <Main>
     <h1><AppleIcon sx={{fontSize:45}} /> Watch</h1>
      <h2>Adventure awaits</h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://www.apple.com/v/watch/bb/images/meta/gps-lte/og__n5qzveqr596m.png?202301172312'} />
    </Main>
    <Main>
     <h1><AppleIcon sx={{fontSize:45}} /> Watch se</h1>
      <h2>A great deal to love</h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://www.apple.com/es/apple-watch-se/images/meta/gps-lte__eksacwutyu2q_og.png'} />
    </Main>
    <Main>
     <h1><AppleIcon sx={{fontSize:45}} /> Watch 8</h1>
      <h2>A Healty leap ahed</h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://www.apple.com/newsroom/images/product/os/watchos/standard/Apple-WWDC22-watchOS-9-hero-220606_Full-Bleed-Image.jpg.small.jpg'} />
    </Main>
  
    </>
  )
}

export default WatchModel;