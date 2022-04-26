import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mshirts} from '../data'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import axios from 'axios'

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

const [products , setProducts] = useState([]);
 useEffect(()=>{
axios(
    {
        url:'http://localhost:8000/api/product',
        method:'get'
    }
).then(response=>{
    console.log('response-', response.data)
    setProducts(response.data)
})
 },[])
    return (
        <div>
        <Banner/>
        <Navbar/>
        <Heading>Shirts</Heading> 
        <Container>
            {products.map((e) =>  (
                <Product item = {e} key = {e.id}/>
            ))
            
        }
        </Container>
        
        </div>
      )
}

export default MShirts