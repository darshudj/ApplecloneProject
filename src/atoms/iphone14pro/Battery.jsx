
import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import gsap from 'gsap'


const Main = styled.div`
    width:100%;
    height:98vh;
    background-color:white;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Title=styled.h2`
    color:black;
    font-size:6.5rem;
    z-index:1;
    position:absolute;
    

`
const Batterysec =styled.ul`
     position:absolute;
     right:3rem;
     list-style:none;
     border:3px solid black;
     border-radius:8px;
     width:14rem;
     height:30rem;
     display:flex;
     flex-direction:column;
     align-items:centre;
     justify-content:centre;


     li{
      width:110%;
      height:100%;
      background-color:black;
      border:5px solid white;
      margin-left:-2.5rem;
      Opacity:0;
    }
`



const Battery = () => {
  const batterypoint =useRef()

  let elements =gsap.utils.selector(batterypoint)
  
  useLayoutEffect(()=>{
    let t1= gsap.timeline({})

    elements("li").forEach(el=>{
      t1.to(el,
        {
          scrollTrigger:{
            trigger:el,
            start:"top +=300px centre",
            end:"bottom centre",
            scrub:true,
          //  markers:true,

          },
          Opacity:1
        })
    })
  })


  return (
    <Main id='battery'>
   <Title>
   Go All Day With <br/> Single Charge
   </Title>
   <Batterysec ref={batterypoint}>
       <li/>
       <li/>
       <li/>
       <li/>
       <li/>
   </Batterysec>
    </Main>
  )
}

export default Battery