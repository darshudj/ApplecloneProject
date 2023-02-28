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


const Main = styled.div`
width:131.6% ;
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
const Content = styled.div`
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
const Watchtype = () => {
    const arr = [
        {
            name: "Watch se",
            src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-40-alum-midnight-nc-se_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171038000%2C1661473982737",
            rate: "12000",
            size: "33.74cm",
            icon1: <MemoryIcon sx={{ fontSize: 40 }} />,
            prop1: "8-core cpu",
            prop2: "7-core gpu",
            icon2: <AutoAwesomeMotionIcon sx={{ fontSize: 40 }} />,
            prop3: "upto 16gb memory",
            icon3: < StorageIcon fontSize="large" />,
            prop4: "2-Tb storage",
            icon4: <BatteryChargingFullIcon sx={{ fontSize: 40 }} />,
            prop5: "upto 18hours battery",
            icon6: <VideocamIcon sx={{ fontSize: 40 }} />,
            prop6: "720 FaceTime HD camera",
            icon7: <VolumeUpIcon sx={{ fontSize: 40 }} />,
            prop7: "three-mic arry",
            icon8: <FingerprintIcon sx={{ fontSize: 40 }} />,
            prop8: "Touch ID",
        },
        {
            name: "Watch s8",
            src: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg",
            rate: "12000",
            size: "33.74cm",
            icon1: <MemoryIcon sx={{ fontSize: 40 }} />,
            prop1: "8-core cpu",
            prop2: "7-core gpu",
            icon2: <AutoAwesomeMotionIcon sx={{ fontSize: 40 }} />,
            prop3: "upto 16gb memory",
            icon3: < StorageIcon fontSize="large" />,
            prop4: "2-Tb storage",
            icon4: <BatteryChargingFullIcon sx={{ fontSize: 40 }} />,
            prop5: "upto 18hours battery",
            icon6: <VideocamIcon sx={{ fontSize: 40 }} />,
            prop6: "720 FaceTime HD camera",
            icon7: <VolumeUpIcon sx={{ fontSize: 40 }} />,
            prop7: "three-mic arry",
            icon8: <FingerprintIcon sx={{ fontSize: 40 }} />,
            prop8: "Touch ID",
        },
        {
            name: "Watch series",
            src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FG123_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1614983675000",
            rate: "12000",
            size: "33.74cm",
            icon1: <MemoryIcon sx={{ fontSize: 40 }} />,
            prop1: "8-core cpu",
            prop2: "7-core gpu",
            icon2: <AutoAwesomeMotionIcon sx={{ fontSize: 40 }} />,
            prop3: "upto 16gb memory",
            icon3: < StorageIcon fontSize="large" />,
            prop4: "2-Tb storage",
            icon4: <BatteryChargingFullIcon sx={{ fontSize: 40 }} />,
            prop5: "upto 18hours battery",
            icon6: <VideocamIcon sx={{ fontSize: 40 }} />,
            prop6: "720 FaceTime HD camera",
            icon7: <VolumeUpIcon sx={{ fontSize: 40 }} />,
            prop7: "three-mic arry",
            icon8: <FingerprintIcon sx={{ fontSize: 40 }} />,
            prop8: "Touch ID",
        },
        {
            name: "Watch",
            src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLD3_VW_34FR+watch-45-alum-starlight-nc-8s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660780895363%2C1661970344452",
            rate: "12000",
            size: "33.74cm",
            icon1: <MemoryIcon sx={{ fontSize: 40 }} />,
            prop1: "8-core cpu",
            prop2: "7-core gpu",
            icon2: <AutoAwesomeMotionIcon sx={{ fontSize: 40 }} />,
            prop3: "upto 16gb memory",
            icon3: < StorageIcon fontSize="large" />,
            prop4: "2-Tb storage",
            icon4: <BatteryChargingFullIcon sx={{ fontSize: 40 }} />,
            prop5: "upto 18hours battery",
            icon6: <VideocamIcon sx={{ fontSize: 40 }} />,
            prop6: "720 FaceTime HD camera",
            icon7: <VolumeUpIcon sx={{ fontSize: 40 }} />,
            prop7: "three-mic arry",
            icon8: <FingerprintIcon sx={{ fontSize: 40 }} />,
            prop8: "Touch ID",
        },

    ]
    return (
        <Main>

            {arr.map((ele,i) => (
                <Content>
                    <div key={i}>
                        <img src={ele.src} />
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

export default Watchtype;