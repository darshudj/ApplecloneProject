import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import advideo from '../../assets/video/ipads.mp4'

const Add =styled.div`

width:100%;
display:flex;
align-items:centre;
justify-content:centre;
height:97vh;
overflow:hidden;


`
const Vid =styled.video`
width:100%;
position :absolute;
top:0;
left: 0;
z-index: -1;
max-height:99%;
`
const Content=styled.div`

p{
    z-index:0;
    margin-top:10rem;
}
`


const Ipodvid = () => {
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
    <Vid id="vidad"  src={advideo} type="video/mp4" autoPlay muted loop />
             <Content >
                <div>
               <p>{play===true? <PauseIcon onClick={vidPause} sx={{ fontSize: 40 }}/>:<PlayArrowIcon onClick={vidPlay} sx={{ fontSize: 40 }}/> }</p> 
               </div>
            </Content> 
             </Add>
  )
}

export default Ipodvid;