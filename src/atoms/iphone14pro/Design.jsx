import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import gsap from 'gsap'



const Main=styled.div`
    width:100%;
    height:98vh;
    background-color:white;
    overflow:hidden;
    `
    const Textcontainer = styled.p`
    width :100%;
    height:50%;
    z-index:1;
    color:black;
    font-size:6.5rem;
    margin-top:2rem;
    margin-left:3rem
    `
    const Bottom=styled.p`
    width :100%;
    height:50%;
    z-index:1;
    color:black;
    font-size:5rem;
    display:flex;
    justify-content:end;
    margin-left:23rem;
    margin-top:-3rem;
    
    `

const Design = () => {
  const container= useRef(null)
  const texttop= useRef(null)
  const textbottom= useRef(null)

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
         // markers:true,
        },
      })
      .fromTo(texttop.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textbottom.current, { x: 0 }, { x: "-20%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Main ref={container}>
    <Textcontainer ref={texttop}>
    <span>Flaw-less Design With Strong Durability.</span>
    </Textcontainer>
    <Bottom ref={textbottom}>
    <span>Flaw-edge Design With Toughest Smartphone Glass.</span>
    </Bottom>
    </Main>
  )
}

export default Design