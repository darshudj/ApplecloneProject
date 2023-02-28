import React from 'react'
import styled from 'styled-components'
import TvModel from '../atoms/Tv/TvModel1'
import Tvvid from '../atoms/Tv/Tvvid'


const Main=styled.div`
width:100%;
display:flex;
flex-direction:column;


 `

const Tv = () => {
  return (
    <Main>
    <Tvvid/>
    <TvModel/>
    </Main>
  )
}

export default Tv