import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import advideo from '../../assets/video/macbook.mp4'

const Add =styled.div`

width:100%
display:flex;
align-items:centre;
justify-content:centre;
margin-top:2rem;
overflow:hidden;
background-color:black;


`
const Vid =styled.video`
z-index: -1;
width:98.9vw;
height:100vh!important;
`
const Content=styled.div`

p{
    z-index:0;
    margin-top:-6rem;
    margin-left:8rem;
}
`


const Macvid = () => {
    const [play,setPlay] =useState(true)
    
    //const navigate=useNavigate()
    
   function vidPlay(){
    let vid =document.getElementById("vidad");
       vid.play()
       setPlay(true)
   }
   function vidPause(){
    let vid =document.getElementById("vidad");
    vid.pause()
    setPlay(false)
   }

  return (
    <Add>
    <Vid id='vidad' src={advideo} type="video/mp4" autoPlay muted loop />
             <Content>
               <p>{play===true? <PauseIcon onClick={vidPause} sx={{ fontSize: 40 }}/>:<PlayArrowIcon onClick={vidPlay} sx={{ fontSize: 40 }}/> }</p> 
            </Content> 
    </Add>
  )
}

export default Macvid;