import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: #C3B1E1;
    color: whitesmoke;
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
    justify-content: center;
    align-items: center;
    height: 50px;
`

const Banner = () => {
  return (
    <div><Container data-testid="banner-1">
        FREE SHIPPING ON ORDERS OVER £40!
        </Container></div>
  )
}

export default Banner