import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row; 
  background-color: #FAF9F6 ;
 
`

const Container = styled.div`
  /* flex: 1; */
  /* margin: 3px; */
  height: 80vh;
  width: 30%;
  position: relative;
  padding: 20px;
  display: flex;
  /* flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row; 
  justify-content: flex-end; */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color: #ffa500;
    margin-bottom: 30px;
  
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: pink;
    color: brown;
    cursor: pointer;
    font-weight: 700;
`;

const FProductType = () => {
  return (
    <Container2>
      <Container>
      <Image src= "https://images.pexels.com/photos/10153595/pexels-photo-10153595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    <Info>
      <Title> Browse Shirts</Title>
      <Button><Link style={{ textDecoration: 'none'}} to="/Women/Shirts">SHOP NOW</Link></Button>
    </Info></Container>
    <Container>
    <Image src= "https://images.pexels.com/photos/885590/pexels-photo-885590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    <Info>
      <Title> Browse Trousers</Title>
      <Button><Link style={{ textDecoration: 'none'}} to="/Women/Trousers">SHOP NOW</Link></Button>
    </Info></Container>
    <Container>
    <Image src= "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
    <Info>
      <Title> Browse Dresses</Title>
      <Button><Link style={{ textDecoration: 'none'}} to="/Women/Dresses">SHOP NOW</Link></Button>
    </Info></Container>
    
  </Container2>
  
  )
}

export default FProductType