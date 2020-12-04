import React from 'react'
import styled from 'styled-components'
import capitalize from 'capitalize-the-first-letter'
import {Col} from 'react-bootstrap'


const DisplayContainer = styled.div`
    background-color: #2EFFE9;
`

const SpriteImg = styled.img`
    width: 8rem;
    height: auto;
`

const PokemonDisplay = ({pokemonDisplay}) => {
    const {id, name, shiny, img, img_shiny, evo_sprites} = pokemonDisplay

    return(
        <Col className={"col-5"} >
        <DisplayContainer lg={5}>
            <h1> #{id} {capitalize(name)}</h1>
            {shiny ? img_shiny.map(img => <SpriteImg src={img} alt=""/>)
                : img.map(img => <SpriteImg src={img} alt=""/>)}
            <br/>
            {evo_sprites.sort().map(url => <SpriteImg src={url} alt=""/>)}
        </DisplayContainer>
        </Col>
    )
}

export default PokemonDisplay