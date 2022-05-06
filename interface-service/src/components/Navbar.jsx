import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartSharp, ContactSupport } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import {Link} from "react-router-dom"
import logo from './logo2.png';

import { useSelector } from 'react-redux'

const Container = styled.div`
    height: 100px;
    /* background-color: #FAF9F6 ; */
`
const Container2 = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #FAF9F6 ; */
`
const LNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const CNav = styled.div`
  flex: 1;
  text-align: center;
`
const RNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const SearchBar = styled.div`
    border: 1px solid lightpink;
    display: flex;
    margin-left: 55px;
    padding: 5px;
    align-items: center;
`

const Input = styled.input`
  border: none;
`

  const Logo = styled.img`
   cursor: pointer;
    width: 75%;
    `

const PageLinks = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 100px;
`

const FirstPageLinks = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 15px;
`
const IconLinks = styled.div`
  cursor: pointer;
  margin-left: 50px;
`


const Navbar = () => {

  const state = useSelector((state) => state);
  const products = state.shop.products;
  let qty = 0 ;
  console.log(' ############## ' , products.length)
  let totalQty = 0;
  for( let i = 0 ; i<products.length ; i++){
      console.log (' ---> ' , products[i].qty) //products[1]
       totalQty = totalQty + products[i].qty;
      // console.log(products[i])
  }

  console.log('Total qty = ', totalQty);
  //console.log("products in cart.....",products);
  return (
    <Container> 
      <Container2>
        <LNav>
          <FirstPageLinks><Link style={{ textDecoration: 'none'}} to="/Men">MEN</Link></FirstPageLinks>
          <PageLinks><Link style={{ textDecoration: 'none'}} to="/Women">WOMEN</Link></PageLinks>
        </LNav>
        <CNav>
          
          <Link to="/"><Logo src = {logo} /></Link>
        </CNav>
        <RNav>
          <PageLinks><Link style={{ textDecoration: 'none'}} to="/Signup">SIGNUP</Link></PageLinks>
          <PageLinks><Link style={{ textDecoration: 'none'}} to="/Login">LOGIN</Link></PageLinks>
          <SearchBar>
          <Input/>
          <Search style = {{color: "purple", fontSize: 18}} />
          </SearchBar>
            <Badge badgeContent={totalQty} color="primary">
            <IconLinks>
            <ShoppingCartSharp/></IconLinks>
            </Badge>
            <IconLinks>
            <ContactSupport/>
            </IconLinks>
        </RNav>
      </Container2>
      </Container>
  )
}

export default Navbar 