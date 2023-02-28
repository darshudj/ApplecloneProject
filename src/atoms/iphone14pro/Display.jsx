import React from 'react'
import styled from 'styled-components'
import { useRef,useLayoutEffect } from 'react'
import gsap from 'gsap'


const Main=styled.div`
    width:100%;
    height:198vh;
    background-color:black;
    overflow:hidden;
    `
const Maintitle =styled.h2`
   font-size:7rem ;
   font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   color:aquamarine;
   margin-top:2.5rem;
   font-weight:350;
   margin-left:4rem;
`
const Midtitle = styled.div`
   display:flex;
   flex-direction:column;
   align-items:flex-end;
   width:100%;
   
   
`
const Title = styled.div`
  font-size:2rem;
  margin-top:2.5rem;
  margin-right:4.5rem
  
`
const Text= styled.p`

    font-size:1rem;
    margin-right:2.5rem;
    margin-top:0rem;
    color:grey
   
`
const Midline = styled.div`
   display:flex;
   flex-direction:column;
   align-items:flex-start;
   width:100%;
   
   
`
const Title2 = styled.div`
  font-size:2rem;
  margin-top:9.5rem;
  margin-left:2.5rem;
  font-weight:200;
  
`
const Text2= styled.p`

    font-size:1rem;
    margin-left:2.5rem;
    margin-top:0rem;
    color:grey
   
`
const Heading=styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:centre;
  align-items:centre;
  transform:rotate(-25deg);
  z-index:1;
  margin-left:24rem;
  margin-top:-5rem
`
const Head=styled.h2`
   margin:0;
   font-size:5rem;
   font-weight:350;
   color:lightpink;
   
`

const Display = () => {

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
          //  markers:true,
          },
        })
        .fromTo(texttop.current, { x: 0 }, { x: "-10%" }, "key1")
        .fromTo(textbottom.current, { x: 0 }, { x: "10%" }, "key1");
  
      return () => {
        if (t1) t1.kill();
      };
    }, []);

  return (
    <Main> 
    <Maintitle>
      Immersive<br/> Display
    </Maintitle>
    <Midtitle>
    <Title>Super Ratine XDR Display</Title>
    <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> Aenean commodo ligula eget dolor. Aenean massa.</Text>
    </Midtitle>
    <Midline ref={container}>
    <Title2>Big is better</Title2>
    <Text2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> Aenean commodo ligula eget dolor. Aenean massa.</Text2>
    </Midline>
    <Heading>
    <Head ref={texttop}>Tougher then ever!</Head>
    <Head ref={textbottom}>Every touch matters.</Head>
    </Heading>
    </Main>
  )
}

export default Display