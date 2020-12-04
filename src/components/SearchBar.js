import React, {useState} from "react";

const Form = ({onSubmit}) => {
    const [pokemonName, setPokemonName] = useState('charmeleon')
    const [isShiny, setShiny] = useState(false)

    return (
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
            <br/>
            <input
                type="checkbox"
                name={isShiny}
                value={isShiny}
                onChange={e => {
                    setShiny(!isShiny)
                }}
            />

            <button>search!</button>
        </form>
    )

}

export default Form