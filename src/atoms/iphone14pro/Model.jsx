import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import {Environment, OrbitControls} from '@react-three/drei'
import { Model } from '../../assets/3D-Model/Scene'

const Main = styled.div`
    width:99.6vw;
    height:98vh;
    background-color:black;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Modeliphone = () => {
  return (
    <Main>
    <Canvas camera={{fov:14}}>
    <ambientLight intensity={1.5}/>
    <directionalLight intensity={[0.9]}/>
    <Suspense fallback={null}>
    <Model/> 
    </Suspense>
    <Environment preset='sunset'/>
    <OrbitControls enableZoom={false}/>
    </Canvas>
    </Main>
  )
}

export default Modeliphone