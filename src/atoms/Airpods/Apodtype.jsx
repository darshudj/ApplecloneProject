import React from 'react'
import styled from 'styled-components'
import MemoryIcon from '@mui/icons-material/Memory';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import StorageIcon from '@mui/icons-material/Storage';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import VideocamIcon from '@mui/icons-material/Videocam';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import {Link} from 'react-router-dom'


const Main=styled.div`
width:128% ;
height:179vh;
z-index:initial;
background-color: white;
display:flex;
justify-content:center;

`
// const Section=styled.h6`

// font-size:3rem;
// color:black;
// border:2px solid blue;
// height:5rem;
// justify-content:centre;
// align-items:centre;

// `
const Content =styled.div`
color:black;
border:2px solid smokywhite;
width:20%;
display:flex;
justify-content:center;
flex-direction:row!important;
margin-top:1rem;
h3{
    margin:0;
    color:black;
    padding:0;
   
    width:10rem;
    margin-top:.5rem;
    display:flex;
    justify-content:center;
}
img{
    width:100%;
    height:8rem;
    margin-top:1rem;
}
button{
    background-color: rgb(45, 92, 198);
    margin-left:3.2rem;
    
}
h5{
    font-size:1rem;
    display:flex;
    justify-content:center;
}
h6{
    display:flex;
    justify-content:center;
    margin-top:3rem
}
p{
    display:flex;
    justify-content:center;
    margin-top:-1rem;
}
`
const Airpodtype = () => {
    const arr=[
        {
            name:"Air pod",
            src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
            rate:"130000",
            size:"33.74cm",
            icon1:<MemoryIcon sx={{ fontSize: 40 }} />,
            prop1:"8-core cpu",
            prop2:"7-core gpu",
            icon2:<AutoAwesomeMotionIcon sx={{ fontSize: 40 }} />,
            prop3:"upto 16gb memory",
            icon3:< StorageIcon fontSize="large" />,
            prop4:"2-Tb storage",
            icon4:<BatteryChargingFullIcon sx={{ fontSize: 40 }}/>,
            prop5:"upto 18hours battery",
            icon6:<VideocamIcon sx={{ fontSize: 40 }}/>,
            prop6:"720 FaceTime HD camera",
            icon7:<VolumeUpIcon sx={{ fontSize: 40 }}/>,
            prop7:"three-mic arry",
            icon8:<FingerprintIcon sx={{ fontSize: 40 }}/>,
            prop8:"Touch ID",
        },
        {
            name:"Air pod 2nd gen",
            src:"https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
            rate:"120800",
            size:"33.74cm",
            icon1:<MemoryIcon sx={{ fontSize: 40 }}/>,
            prop1:"8-core cpu",
            prop2:"7-core gpu",
            icon2:<AutoAwesomeMotionIcon sx={{ fontSize: 40 }} />,
            prop3:"upto 16gb memory",
            icon3:< StorageIcon fontSize="large"/>,
            prop4:"2-Tb storage",
            icon4:<BatteryChargingFullIcon sx={{ fontSize: 40 }}/>,
            prop5:"upto 18hours battery",
            icon6:<VideocamIcon sx={{ fontSize: 40 }} />,
            prop6:"720 FaceTime HD camera",
            icon7:<VolumeUpIcon sx={{ fontSize: 40 }}/>,
            prop7:"three-mic arry",
            icon8:<FingerprintIcon sx={{ fontSize: 40 }}/>,
            prop8:"Touch ID",
        },
        {
            name:"Air pod pro",
            src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
            rate:"20000",
            size:"33.74cm",
            icon1:<MemoryIcon sx={{ fontSize: 40 }}/>,
            prop1:"8-core cpu",
            prop2:"7-core gpu",
            icon2:<AutoAwesomeMotionIcon sx={{ fontSize: 40 }}/>,
            prop3:"upto 16gb memory",
            icon3:< StorageIcon fontSize="large"/>,
            prop4:"2-Tb storage",
            icon4:<BatteryChargingFullIcon sx={{ fontSize: 40 }}/>,
            prop5:"upto 18hours battery",
            icon6:<VideocamIcon sx={{ fontSize: 40 }}/>,
            prop6:"720 FaceTime HD camera",
            icon7:<VolumeUpIcon sx={{ fontSize: 40 }}/>,
            prop7:"three-mic arry",
            icon8:<FingerprintIcon sx={{ fontSize: 40 }}/>,
            prop8:"Touch ID",
        },
        {
            name:"Airpod Max",
            src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000",
            rate:"30000",
            size:"33.74cm",
            icon1:<MemoryIcon sx={{ fontSize: 40 }}/>,
            prop1:"8-core cpu",
            prop2:"7-core gpu",
            icon2:<AutoAwesomeMotionIcon sx={{ fontSize: 40 }}/>,
            prop3:"upto 16gb memory",
            icon3:< StorageIcon fontSize="large" />,
            prop4:"2-Tb storage",
            icon4:<BatteryChargingFullIcon sx={{ fontSize: 40 }}/>,
            prop5:"upto 18hours battery",
            icon6:<VideocamIcon sx={{ fontSize: 40 }}/>,
            prop6:"720 FaceTime HD camera",
            icon7:<VolumeUpIcon sx={{ fontSize: 40 }}/>,
            prop7:"three-mic arry",
            icon8:<FingerprintIcon sx={{ fontSize: 40 }}/>,
            prop8:"Touch ID",
        },
       
    ]
  return (
   <Main>
     
      {arr.map((ele, i)=>(
        <Content>
         <div key={i}>
         <img src={ele.src}/>
         <h3>{ele.name}</h3>
         <h3>{ele.rate}</h3>
         <Link to ='/store'><button>Buy</button></Link>
         <h5>{ele.size}</h5>
         <h6>{ele.icon1}</h6>
         <p>{ele.prop1}</p>
         <p>{ele.prop2}</p>
         <h6>{ele.icon2}</h6>
         <p>{ele.prop3}</p>
         <h6>{ele.icon3}</h6>
         <p>{ele.prop4}</p>
         <h6>{ele.icon4}</h6>
         <p>{ele.prop5}</p>
         <h6>{ele.icon6}</h6>
         <p>{ele.prop6}</p>
         <h6>{ele.icon7}</h6>
         <p>{ele.prop7}</p>
         <h6>{ele.icon8}</h6>
         <p>{ele.prop8}</p>
         </div>
        </Content>
      ))}
      
   </Main>
  )
}

export default Airpodtype;