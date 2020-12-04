import React, {useState} from "react";
import styled from 'styled-components'

const FormWrapper = styled.div`
    width: 50%;
    margin: 2rem 0;
    display: flex;
    justify-content: space-between
`
const StyledButton = styled.button`
    background-color: blue
    :hover{
    background-color:white
    }

`

const Form = ({onSubmit}) => {
    const [pokemonName, setPokemonName] = useState('charmeleon')
    const [isShiny, setShiny] = useState(false)

    return (
        <FormWrapper>
            <form onSubmit={(event) => {
                onSubmit(pokemonName, isShiny)
                event.preventDefault()
            }}>
                <input
                    type="text"
                    name={pokemonName}
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                />
                Shiny?
                <input
                    type="checkbox"
                    name={isShiny}
                    value={isShiny}
                    onChange={e => {
                        setShiny(!isShiny)
                    }}
                />

                <StyledButton>search!</StyledButton>
            </form>
        </FormWrapper>

    )

}

export default Form