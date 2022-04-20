import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row; 
  background-color: #FAF9F6 ;

 
`

const Container = styled.div`
  /* flex: 1; */
  /* margin: 3px; */
  height: 80vh;
  width: 35%;
  position: relative;
  padding: 20px;
  display: flex;
  margin-left: 120px;
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

const MProductType = () => {
  return (
    <Container2>
      <Container>
      <Image src= "https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    <Info>
      <Title> Browse Shirts</Title>
      <Button><Link style={{ textDecoration: 'none'}} to="/Men/Shirts">SHOP NOW</Link></Button>
    </Info></Container>
    <Container>
    <Image src= "https://media.boohoo.com/i/boohoo/mdd06215_dark%20grey_xl?sm=c&fmt=webp&qlt=80&w=%7B230%2A%24dpr%7D&dpr=2" />
    <Info>
      <Title> Browse Trousers</Title>
      <Button><Link style={{ textDecoration: 'none'}} to="/Men/Trousers">SHOP NOW</Link></Button>
    </Info></Container>
  </Container2>
  
  )
}

export default MProductType