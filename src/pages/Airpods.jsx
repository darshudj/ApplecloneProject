import React from 'react'
import styled from 'styled-components'
import Airpodvid from '../atoms/Airpods/Airpodsvid'
import AirpodModel from '../atoms/Airpods/ApodModel1'
import Airpodtype from '../atoms/Airpods/Apodtype'
import Footer from '../molecules/Footer/Footer'



const Main=styled.div`
width:100%;

`

const Airpods = () => {
  return (
    <Main>
    <Airpodvid/>
    <AirpodModel/>
    <Airpodtype/>
    </Main>
  )
}

export default Airpods