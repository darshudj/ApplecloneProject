import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Main = styled.div`
display:flex;
flex-direction:column;
justify-content:centre;
align-items:centre;
width:99.5vw;
background-color:black;
`
const Topcontent =styled.div`
display:flex;
flex-direction:row;
justify-content:centre;
align-items:centre;
width:100%;
backgroung-color:black;
margin-top:2rem
`
const Left = styled.div`
width:30%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h2{
  margin-top:-1rem;
}
`
const Right = styled.div`
width:70%;
height:95vh;
img{
  width:98%;
  height:98%;
}
`
const Itemdiv =styled.div`
display:flex;
flex-direction:coloumn;
justify-content:centre;
align-items:centre;
width:100%;
backgroung-color:white;
`

const Accessoriesitems = () => {
  return (
    <Main>
    <Topcontent>
    <Left>
    <h1> Home Pod</h1>
    <h2>Adventure awaits</h2>
  <Link to ='/store'>
  <h4>Learn more &gt;   Buy &gt;  </h4>
  </Link>
    </Left>
    <Right>
    <img src={'https://www.apple.com/v/homepod-2nd-generation/a/images/meta/homepod__dlwt789yhxme_og.png?202302030001'} />
    </Right>
    </Topcontent>
    <Itemdiv>
     kgjhkbv
    </Itemdiv>

    </Main>
  )
}

export default Accessoriesitems