import React from 'react'
import styled from 'styled-components'
import {Col} from 'react-bootstrap'


import MoveList from './MoveList'
import PokeTypes from "./PokeTypes";

//tried styled(Col)

const InfoContainer = styled(Col)`
    background-color: #C8C2C2;
    font-family: Courier, serif
`


const PokemonInfo = ({pokemonInfo}) => {
    console.log(pokemonInfo)
   const {genus, types, moves, flavor_text} = pokemonInfo
    return(
        <InfoContainer className={"col-7"}>
            <h2> The {genus}</h2>
           <PokeTypes types={types}/>

            <h3>{flavor_text}</h3>
            <MoveList moves={moves} />
        </InfoContainer>
    )

}
export default PokemonInfo