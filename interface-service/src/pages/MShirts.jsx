import React from 'react'
import styled from 'styled-components'
import { mshirts} from '../data'
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

const MShirts = () => {
    return (
        <div>
        <Banner/>
        <Navbar/>
        <Heading>Shirts</Heading> 
        <Container>
            {mshirts.map((item) =>  (
                <Product item = {item} key = {item.id}/>
            ))
            
        }
        </Container>
        
        </div>
      )
}

export default MShirts