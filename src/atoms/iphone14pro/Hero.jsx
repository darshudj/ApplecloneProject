import React from 'react'
import styled from 'styled-components'
import bcVid from '../../assets/video/Ink - 21536.mp4'

const Mainhero=styled.div`
  width:100%;
  height:98vh;
  overflow:hidden;
  `
  const Title =styled.h2`
     margin-left:1rem;
     font-size:2rem;
     font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     color:greylight;
     font-weight:400;
     z-index:1;
     position:sticky;
     top:3.5rem;
  `
  const Text=styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:centre;
    

    span{
    margin-top:15rem;
    font-size:5rem;
    font-weight:600;
    text-transform:uppercase;
    padding:1rem;
    z-index:1;
    
   
    `
    const Vidcontainer=styled.div`
    width:99.6vw;
    height:99vh;
    position:absolute;
    z-index:0;
    video{
      width:100%;
      height:100vh;
      object-fit:cover;
      object-position:bottom;
    }
    `


const Hero = () => {
  
  return (
    <Mainhero id='hero'>
    <Vidcontainer>
    <video src={bcVid} type="video/mp4" autoPlay muted loop/>
    </Vidcontainer>
    <Title>iphone 14 pro Max</Title>
    <Text>
    <span>so.Cold.</span>
    
    <span>so.Bold.</span>
    </Text>
    </Mainhero>
  )
}

export default Hero