import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const BrandWrapper = styled.div`
    display: flex;
    
`

const Brand = () => {

    return(
        <BrandWrapper>
            <Logo/>
            <h1 className={"mt-3"}>My Pokédex App</h1>
        </BrandWrapper>
    )
}

export default Brand