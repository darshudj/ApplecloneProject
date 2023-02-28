import React from 'react'
import Battery from '../atoms/iphone14pro/Battery'
import Design from '../atoms/iphone14pro/Design'
import Display from '../atoms/iphone14pro/Display'
import Hero from '../atoms/iphone14pro/Hero'
import Processor from '../atoms/iphone14pro/Processor'
import Quote from '../atoms/iphone14pro/Quote'
import Modeliphone from '../atoms/iphone14pro/Model'
import styled from 'styled-components'
import Footer from '../molecules/Footer/Footer'

const Main =styled.div`
width:100% ;
`

const Iphone = () => {
  return (
    <Main>
    <Quote/>
    <Hero/>
    <Design/>
    <Display/>
    <Battery/>
    <Processor/>
    <Modeliphone/>
    <Footer/>
    </Main>
  )
}

export default Iphone;