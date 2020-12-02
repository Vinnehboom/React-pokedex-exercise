import './App.css';
import React, { useState, useEffect} from 'react';
import {move} from "formik";
import axios from 'axios';

function App() {
    // flags
    const [isLoading, setLoading] = useState(true);
    const [isInitiazed, setInitialized] = useState(false);

    // state
    const [fetchMainData, setFetchMainData] = useState('');
    const [fetchSideData, setFetchSideData] = useState('');
    const [pokemonName, setpokemonName] = useState('');
    const [pokemonId, setPokemonId] = useState('');
    const [evolutionChain, setEvolutionChain] = useState('');
    const [isShiny, setShiny] = useState(false);

    function fetch() {
        let pokemon = pokemonName.toLowerCase();
        console.log(pokemonId);
        pokemonId ? pokemon = pokemonId : pokemon = pokemonName.toLowerCase();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response =>
            {
                setFetchMainData(response.data)
                setPokemonId(response.data.id)
                console.log(response.data)
            });
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
            .then(response =>
            {
                setFetchSideData(response.data)
                setLoading(false)
                setInitialized(true)
                axios.get(response.data.evolution_chain.url)
                    .then(response =>
                    {
                        setEvolutionChain(response.data)
                        setLoading(false)
                        setInitialized(true)
                    })
                console.log(response.data)
    });
    }

    function onSubmit(event) {
        setLoading(true)
        fetch()
        event.preventDefault()
    }

    function previousPokemon()
    {
        setPokemonId(previousId => previousId - 1)
    }
    function nextPokemon()
    {
        setPokemonId(previousId => previousId + 1)
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
                {isLoading ? 'Loading...' :
                    <PokedexContainer main={fetchMainData} side={fetchSideData} shiny={isShiny} evolution={evolutionChain}/>
                }
                <button onClick={previousPokemon}>
                    Previous
                </button>
                <button onClick={nextPokemon}>
                    Next
                </button>
            </div>
            : ''
            }
        </form>
    </div>
);
}

const PokedexContainer = ({main, side, shiny, evolution}) => {
    const {genera} = side;
    const {name, sprites, id, moves, types} = main;
    const display = {name, sprites, id, shiny, genera, evolution};
    const info = {side, moves, types};
    return(
        <div>
            <PokemonDisplay data={display}/>
{/*
            <PokemonInfo data={info} />
*/}
        </div>
    )
};

const PokemonDisplay = (props) =>
{
    const {sprites, name, id, shiny, genera, evolution} = props.data;
    const spriteArray =[];
        shiny ? spriteArray.push(sprites.front_shiny, sprites.back_shiny) : spriteArray.push(sprites.front_default, sprites.back_default);
    let enGenus;
    genera.forEach(genus => {
        if (genus.language.name === 'en') {
            enGenus = genus.genus
        }
    })
    return(
        <div>
            <h1>#{id} {name}</h1>
            <h2>The {enGenus}</h2>
            <BaseSprites sprites={spriteArray} />
        </div>
    )
}


const BaseSprites =({sprites : [front, back]})/*, isShiny*/ =>
{
    return(
        <div>
            <img src={front} alt=""/>
            <img src={back} alt=""/>
        </div>
    )
}
/*
const PokemonInfo = () =>
{
    return(
        <div>
            <MoveList moves={moves} />
        </div>
    )
}*/

const MoveList = ({moves}) => {
    const totalMoves = moves.length
    const movesAmount = Math.min(4, totalMoves);
    const movesArray = []
    for (let i = 0; i < movesAmount; i++) {
        let randomNr = Math.floor(Math.random() * totalMoves);
        movesArray.push((moves[randomNr].move.name).split('-').join(' '));
    }
    return(
        <ul>
            {movesArray.map(move => (<li >{move}</li>))}
        </ul>
    )
}

export default App;
