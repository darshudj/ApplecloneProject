import React from 'react'
import styled from 'styled-components'
import Mactype from '../atoms/Mac/Mactype'
import Macvid from '../atoms/Mac/Macvid'
import Model1 from '../atoms/Mac/macModel1'
import Footer from '../molecules/Footer/Footer'

const Mac = () => {
  
  const Main=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
  
  // `
  // const Heading =styled.h1`
  //    background-color:white;
  //    color:black;
  //    margin:0rem;
   
  // `
  
  return (
    <Main>
   <Macvid/>
   <Model1/>
   <Mactype/>
   <Footer/>
    </Main>
  )
}

export default Mac