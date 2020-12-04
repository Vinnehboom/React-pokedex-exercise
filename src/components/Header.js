import React from 'react'
import styled from 'styled-components'
import Form from './SearchBar'
import Brand from './Brand'

const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: red
    
`

const Header =({onSubmit}) => {

    return(
        <HeaderWrapper>
                <Brand/>
                <Form onSubmit={onSubmit}/>
        </HeaderWrapper>
    )

}

export default Header