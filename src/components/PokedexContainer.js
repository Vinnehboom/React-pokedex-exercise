import React from 'react'
import capitalize from "capitalize-the-first-letter";
import styled from 'styled-components'

import PokemonInfo from './PokemonInfo'
import PokemonDisplay from './PokemonDisplay'


const PokedexWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center
`

const PokedexContainer = ({pokemon /* previousPokemon */}) => {

const {genus, types, moves, flavor_text, id, name, shiny, img, img_shiny, evo_sprites} = pokemon
console.log(genus)
const pokemonInfo = {genus, types, moves, flavor_text}
const pokemonDisplay = {id, name, shiny, img, img_shiny, evo_sprites}
    return (
        <PokedexWrapper>
            <h1>My Fancy 'Dex</h1>
            <PokemonDisplay pokemonDisplay={pokemonDisplay}/>
            <PokemonInfo pokemonInfo={pokemonInfo} />
        </PokedexWrapper>
    )
}

export default PokedexContainer