import React from 'react'
import styled from 'styled-components'
import IpodModel from '../atoms/ipods/ipodModel1'
import Ipodtype from '../atoms/ipods/ipodtype'
import Ipodvid from '../atoms/ipods/ipodvid'
import Footer from '../molecules/Footer/Footer'


const Main=styled.div`
width:100%;

`

const Ipad = () => {
  return (
    <Main>
    <Ipodvid/>
    <IpodModel/>
    <Ipodtype/>
    <Footer/>
    </Main>
  )
}

export default Ipad