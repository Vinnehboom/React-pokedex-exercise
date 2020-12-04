import React from 'react'
import styled from 'styled-components'
import capitalize from 'capitalize-the-first-letter'


const DisplayContainer = styled.div`

`

const PokemonDisplay = ({pokemonDisplay}) => {
    const {id, name, shiny, img, img_shiny, evo_sprites} = pokemonDisplay

    return(
        <DisplayContainer>
            <h1> #{id} {capitalize(name)}</h1>
            {shiny ? img_shiny.map(img => <img src={img} alt=""/>)
                : img.map(img => <img src={img} alt=""/>)}
            <br/>
            {evo_sprites.sort().map(url => <img src={url} alt=""/>)}
        </DisplayContainer>
    )
}

export default PokemonDisplay