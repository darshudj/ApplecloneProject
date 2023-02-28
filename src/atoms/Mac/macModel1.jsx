import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    width:64%
}
`
const Model1 = () => {
  return (
    <>
    <Main>
     <h1>MacBook pro </h1>
      <h2>Mover.Maker.Boundary bbreaker</h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/og-macbook-pro-202301?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1670261864358'} />
    </Main>
    <Main>
     <h1>Mac mini</h1>
      <h2>More muscle.Morehustle.</h2>
    <Link to ='/store'>
    <h4>Learn more &gt;   Buy &gt;  </h4>
    </Link>
    <img src={'https://www.apple.com/v/mac-mini/s/images/meta/mac-mini_overview__164prubpwpee_og.jpg'} />
    </Main>
  
    </>
  )
}

export default Model1