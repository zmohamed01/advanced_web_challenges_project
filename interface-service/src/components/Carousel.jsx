//import React from 'react'
import styled from 'styled-components'
import { ArrowRightRounded, ArrowLeftRounded } from "@material-ui/icons";
import { carouselSlides } from "../data";
import { useState } from "react";

const Container = styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;

`

const Director = styled.div`
    width: 55px;
    height: 55px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    left: ${props=> props.side === "left" && "20px"};
    right: ${props=> props.side === "right" && "20px"};
    margin: auto;
    opacity: 0.7;
    z-index: 2;
`

const Container2 = styled.div`
        height : 100%;
        display: flex;
        transform: translateX(${props=>props.num * -100}vw);
        transition: all 2s ease;
      
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 90vh;
    background-color: #${props=>props.background};
`

const Images = styled.div`
    padding-left: 50px;
    height: 100%;
    flex:1;
`

const Img = styled.img`
    height: 65%;
    margin-top: 100px;

`
const Details = styled.div`
       flex:1;
       padding: 50px;
       padding-left: 40px;
`

const Heading = styled.h1`
    font-size: 70px;
`

const Paragraph = styled.p`
    margin: 30px 0px;
    font-size: 20px;
`

const Button = styled.button`
    padding: 10px; 
    cursor: pointer;
    font-size: 20px;
    background-color: transparent;
`

const Carousel = () => {
        const [num, setNum] = useState(0)
        const clicker = (side) => {
            if (side === "left"){
                setNum (num > 0 ? num-1 : 2)
            } else { 
                setNum (num < 2 ? num+1 : 0)
            }
        };
    return (
    <Container>
        <Director side = "left" onClick={() => clicker("left")}>
            <ArrowLeftRounded/>
        </Director>
        <Container2 num = {num}>
            {carouselSlides.map(item=>(
            <Slide background={item.background} >
  
            <Images>
                <Img src={item.image}/>
            </Images>
            <Details><Heading>{item.heading}</Heading>
            <Paragraph>{item.paragraph}</Paragraph>
            <Button>SHOP MENS</Button> &nbsp;&nbsp;&nbsp;
            <Button>SHOP WOMENS</Button>
            </Details>
            </Slide>
             ) )}
        </Container2>
        <Director side = "right" onClick={() => clicker("right")}>
            <ArrowRightRounded/>
        </Director>
    </Container>
  )
}

export default Carousel