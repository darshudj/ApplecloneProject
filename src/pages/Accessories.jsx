import React from 'react'
import styled from 'styled-components'
import Accessoriesitems from '../atoms/Accessories/Accessoriesitems'


const Main = styled.div`
border:3px solid white
`

const Accessories = () => {
  return (
    <Main>
    <Accessoriesitems/>
    </Main>
  )
}

export default Accessories