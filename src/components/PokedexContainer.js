import React from 'react'
import capitalize from "capitalize-the-first-letter";
import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'

import PokemonInfo from './PokemonInfo'
import PokemonDisplay from './PokemonDisplay'


const PokedexWrapper = styled(Container)`
    position: relative;
    top: 4rem;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background-color: red;
    padding: 3rem;
`

const PokedexContainer = ({pokemon /* previousPokemon */}) => {

const {genus, types, moves, flavor_text, id, name, shiny, img, img_shiny, evo_sprites} = pokemon
console.log(genus)
const pokemonInfo = {genus, types, moves, flavor_text}
const pokemonDisplay = {id, name, shiny, img, img_shiny, evo_sprites}
    return (
        <PokedexWrapper>
            <h1 className={"mb-4"}>My Fancy 'Dex</h1>
            <Row>
                <PokemonDisplay pokemonDisplay={pokemonDisplay}/>
                <PokemonInfo pokemonInfo={pokemonInfo} />
            </Row>
        </PokedexWrapper>
    )
}

export default PokedexContainer