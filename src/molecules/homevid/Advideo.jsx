import React from 'react'
import Style from './Advideo.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useState } from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useNavigate } from 'react-router-dom';
import advideo from '../../assets/video/videoplayback (2).mp4'

const Advideo = () => {
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
    <div className={Style.advertise}>
       <video id="vidad" className={Style.advid} width="100%"  src={advideo} type="video/mp4" autoPlay muted loop />
                <div className={Style.content}>
                  <h3>A Vishal Bhardwaj film </h3> 
                   <h1>FURSAT</h1>
                   <h3>Shot on iPhone 14 Pro</h3>
                   <div className={Style.buttons}>
                   <button>Watch the film <PlayCircleIcon  sx={{ marginBottom:'-7px' }}/></button>
                   <a href='https://www.youtube.com/watch?v=am1OEaa62Ko'></a>
                   <button>Learn more</button>
                   </div>
                   <div className={Style.play}>
                  <p>{play===true? <PauseIcon onClick={vidPause} sx={{ fontSize: 40 }}/>:<PlayArrowIcon onClick={vidPlay} sx={{ fontSize: 40 }}/> }</p> 
                  </div>
                   
                   </div>
                    
                </div>
  )
}

export default Advideo