import React from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Image = styled.img`
height: 75%;
`
const Images = styled.div`
    opacity: 1;
    flex:1;
    margin:5px;
    min-width: 280px;
    height: 600px;
    display: flex ;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke ;
    cursor: pointer;
`
const Container = styled.div`
    flex:1;
    align-items: center;

    &:hover ${Images}{
    opacity: 0.7;
  }
 
`

const Title = styled.div`
    margin-left: 10px;
    font-weight: bold;

`
const AccordionCont = styled.div`
    padding: 20px;
    background-color: #ffffff;

`

const Dropdown = styled.div`
  margin: 20px;
`;

const Select = styled.select`
  padding: 15px;
  margin-right: 20px;

`;
const Option = styled.option`
`;

const Button = styled.button`
    padding: 10px; 
    cursor: pointer;
    font-size: 15px;
    background-color: #fef5f5;
    `

const FProduct = ({item}) => {
  return (
    <Container>
        <Images>
        <Image src = {item.img}/>
        </Images>
        <AccordionCont>
        <Accordion expanded='true'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><Title>{item.description} </Title> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Made of pure cotton.  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price: £{item.price} <br/><br/>
            Select Size: 
            <Dropdown>
            <Select>
          <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
          </Dropdown>
            <Button>Add to Bag </Button>
          </Typography>
        </AccordionDetails>
      </Accordion></AccordionCont>
    </Container>
  )
}

export default FProduct