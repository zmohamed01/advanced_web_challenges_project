import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartSharp, ContactSupport } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
    height: 60px;
    margin-bottom: 45px ;
`
const Container2 = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
const Logo = styled.h1`
  font-weight: bold;
  /* font-style: italic; */
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
  return (
    <Container> 
      <Container2>
        <LNav>
          <FirstPageLinks>MEN</FirstPageLinks>
          <PageLinks>WOMEN</PageLinks>
        </LNav>
        <CNav>
          <Logo>TAILORED 4 U.</Logo>
        </CNav>
        <RNav>
          <PageLinks>SIGNUP</PageLinks>
          <PageLinks>LOGIN</PageLinks>
          <SearchBar>
          <Input/>
          <Search style = {{color: "purple", fontSize: 18}} />
          </SearchBar>
            <Badge badgeContent={4} color="primary">
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