import React from 'react'
import styled from 'styled-components'
import {Col} from 'react-bootstrap'


import MoveList from './MoveList'

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
            {types.map(type => {
                let icon = type + '.png'
                return (<div>
                    <h3>{type}</h3>
                    <img src={window.location.origin + '/assets/icons/'+icon}
                         alt=""/>
                </div>)
            })}

            <h3>{flavor_text}</h3>
            <MoveList moves={moves} />
        </InfoContainer>
    )

}
export default PokemonInfo