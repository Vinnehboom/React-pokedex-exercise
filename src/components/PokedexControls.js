import React from 'react'
import styled from 'styled-components'
import StyledButton from "./Button";


const ControlWrapper = styled.div`
    width: 50%;
    margin: 2rem auto 0 auto
`
const PokedexControls = ({params, functions}) => {

    const {previousPokemon, nextPokemon} = functions
    const id = params.id
    const shiny = params.shiny

    return(
        <ControlWrapper>
            <StyledButton onClick={() => {previousPokemon(id -1, shiny)}}>Previous Pokemon</StyledButton>
            <StyledButton onClick={() => {nextPokemon(id + 1, shiny)}}>Next Pokemon</StyledButton>
        </ControlWrapper>
    )
}


export default PokedexControls