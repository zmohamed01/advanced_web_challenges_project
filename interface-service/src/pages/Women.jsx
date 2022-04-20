import React from 'react'
import FProductType from '../components/FProductType'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Banner from '../components/Banner'

const Container = styled.div`
      padding: 10px;
      background-color: #FAF9F6 ;
`

const Women = () => {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <Container/>
      <FProductType/>
      <Container/>
    </div> 
  )
}

export default Women