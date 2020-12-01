import './App.css';
import React, {useEffect, useState} from 'react'
import {setIn} from "formik";



function App() {
    // state
    const [isLoading, setLoading] = useState(true)
    const [isInitiazed, setInitialized] = useState(false)
    const [fetchData, setFetchData] = useState('')
    const [pokemonName, setpokemonName] = useState('')
    const [isShiny, setShiny] = useState(false)

    function fetchPokemon() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
            .then(response => response.json())
            .then(data => {
                setFetchData(data)
                setLoading(false)
                setInitialized(true)
                console.log(data)
            })

    }

    function onSubmit(event) {
        setLoading(true)
        fetchPokemon()
        event.preventDefault()
    }
return (
    <div className="App">
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name={pokemonName}
                value={pokemonName}
                onChange={e => setpokemonName(e.target.value)}
            />
            <input
                type="checkbox"
                name={isShiny}
                value={isShiny}
                onChange={e => setShiny(e.target.value)}
            />
            <button>search!</button>
            {isInitiazed ?
            <div>
                <h1>My Fancy 'Dex</h1>
                {isLoading ? 'Loading...' : <PokemonDisplay props={fetchData} />}
            </div>
            : ''
            }
        </form>
    </div>
);
}


function PokemonDisplay({name, sprites, id,moves,isShiny, ...other})
{
    return(
        <div>
            <h1>#{id} {name}</h1>
            <SpriteImage props={sprites} />
            <MoveList data={moves} />
        </div>

    )
}
function SpriteImage({front_default, back_default}/*, isShiny*/)
{
    return(
        <div>
            <img src={front_default} alt=""/>
            <img src={back_default} alt=""/>
        </div>
    )
}

function MoveList({moves}){
    return(
        <ul>
            {moves.map(move => (<li>{move.name}</li>))}
        </ul>
    )
}

export default App;
