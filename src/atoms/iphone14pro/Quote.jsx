import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

    const Main=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:98vh;
    flex-direction: column;
    background-color:black;
    `

    const Text=styled.p`
    font-size:1.5rem;
    position:relative;
    margin-top:-1rem;
     span{
        background :linear-gradient(
            to right ,purple,blue,red,orange,pink
        )
        // background-clip: text;
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
     }
    `
    const Quote = () => {
        gsap.registerPlugin(ScrollTrigger)
        const mainRef =useRef(null)

        useLayoutEffect(()=>{
            let Ele =mainRef.current
          
           let trigger = ScrollTrigger.create({
                trigger:Ele,
                start:"top top",        
            })
            return ()=>{
                if(trigger) trigger.kill();
            }
        },[])

  return (

    <Main ref={mainRef}>
    <Text><span>" you can't connect the dots looking forward</span></Text>
    <Text><span> you can only connect them looking backward</span></Text>
    <Text><span>so you have to trust that dots</span></Text>
    <Text><span>will somehow connect in future "</span></Text>
    <Text><span>-steve jobs</span></Text>
    </Main>
  )
}

export default Quote