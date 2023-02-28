import React from 'react'
import styled from 'styled-components'
import WatchModel from '../atoms/Watches/WatchModel1'
import Watchtype from '../atoms/Watches/Watchtype'
import Watchvid from '../atoms/Watches/Watchvid'


const Main=styled.div`
width:100%;

`

 const Watch = () => {
  return (
    <Main>
    <Watchvid/>
    <WatchModel/>
    <Watchtype/>
    </Main>
  )
}
export default Watch;
