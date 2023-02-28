
import React from 'react'
import styled from 'styled-components'
import processorimg from '../../assets/images/A15-Bionic.jpg'


const Main = styled.div`
    width:99.6vw;
    height:98vh;
    background-color:black;
    overflow:hidden;
    div{
    display:flex;
    justify-content:centre;
    align-items:centre
}
    img{
        width:25%;
        height:40%;
        margin-left:6rem;
        margin-top:10rem;
        box-shadow: 0px 0px 30px 0px red;
    }
    `
const Title = styled.p`
    color:grey;
    width:30%;
    margin-top:15rem;
    margin-left:4rem
   
`
const Content =styled.p`

    color:orange;
    font-size:7rem;
    margin-left:10rem;
    margin-top:0;
    display:flex;
    justify-content:center;

`
const Processor = () => {
    return (
        <Main>
        <div>
            <Title>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.

                I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley
            </Title>
            <img  src={processorimg}/>
            </div>
        
           <Content>Fastest Processor</Content>
        </Main>
    )
}

export default Processor