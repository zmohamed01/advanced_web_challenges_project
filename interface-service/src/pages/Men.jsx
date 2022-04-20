import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import MProductType from '../components/MProductType'
import Banner from '../components/Banner'

const Container = styled.div`
      padding: 10px;
      background-color: #FAF9F6 ;
`


const Men = () => {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <Container/>
      <MProductType/>
      <Container/>
    </div>
  )
}

export default Men 