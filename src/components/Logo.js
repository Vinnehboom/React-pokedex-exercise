import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'



const StyledLogo = styled.img`
    width: 5rem;
    height: auto;
    position: relative;
    margin 0 1rem;
`

const Logo = () => {

    return(
        <StyledLogo src={logo} />
    )
}

export default Logo