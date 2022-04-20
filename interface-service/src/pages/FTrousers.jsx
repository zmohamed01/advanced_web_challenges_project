import React from 'react'
import styled from 'styled-components'
import { ftrousers} from '../data'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Heading = styled.div`
        font-weight: bold;
        font-size: 45px;
        margin: 20px;
`

const FTrousers = () => {
    return (
        <div>
        <Banner/>
        <Navbar/>
        <Heading>Trousers</Heading> 
        <Container>
            {ftrousers.map((item) =>  (
                <Product item = {item} key = {item.id}/>
            ))
            
        }
        </Container>
        
        </div>
      )
}

export default FTrousers