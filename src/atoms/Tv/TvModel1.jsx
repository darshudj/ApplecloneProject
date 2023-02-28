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
const TvModel = () => {
  return (
    <>
    <Main>
     <h1><AppleIcon sx={{fontSize:45}} /> Tv</h1>
      <h2>Adventure awaits</h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://www.apple.com/newsroom/images/product/tv/standard/Apple-TV-4K-hero-221018.jpg.og.jpg?202302091820'} />
    </Main>
    <Main>
     <h1><AppleIcon sx={{fontSize:45}} />Pods mini</h1>
      <h2>Surprising sound for its size</h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-og-202110?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1632930650000'} />
    </Main>
    <Main>
     <h1><AppleIcon sx={{fontSize:45}} /> Home pods</h1>
      <h2>A Healty leap ahed</h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://english.cdn.zeenews.com/sites/default/files/2023/01/20/1143771-homepod1.jpg'} />
    </Main>
  
    </>
  )
}

export default TvModel;