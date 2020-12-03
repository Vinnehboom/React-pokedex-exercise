import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Client from "./ApiHelper";
import capitalize from 'capitalize-the-first-letter'

function App() {
    // flags
    const [isLoading, setLoading] = useState(false);
    const [isInitiazed, setInitialized] = useState(false);
    // state
    const [pokemonName, setpokemonName] = useState('charmeleon');
    const [pokemon, setPokemon] = useState()

    /*
    function previousPokemon() {
        setPokemonId(previousId => previousId - 1)
    }
    function nextPokemon() {
        setPokemonId(previousId => previousId + 1)
    }
*/

    const client = new Client()

    const getPokemonData = (name) => {
        client.getPokemonByName(name).then(pokemon => {
            setPokemon(pokemon)
            setLoading(false)
        })
    }

    const onSubmit = (event) => {
        setInitialized(true)
        setLoading(true)
        getPokemonData(pokemonName)
        event.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name={pokemonName}
                    value={pokemonName}
                    onChange={e => setpokemonName(e.target.value)}
                />

                <button>search!</button>
            </form>
                {isInitiazed ?
                    <div>
                        <h1>My Fancy 'Dex</h1>
                        {isLoading ? <Loader />
                        : <PokedexContainer pokemon={pokemon}/>
                        }


                        {/*<button onClick={previousPokemon}>
                            Previous
                        </button>
                        <button onClick={nextPokemon}>
                            Next
                        </button>*/}
                    </div>
                    : ''
                }
        </div>
    );
}

const PokedexContainer = ({pokemon}) => {
    const [isShiny, setShiny] = useState(false)
    return(
        <div>
            <h1> #{pokemon.id} {capitalize(pokemon.name)}</h1>
            <h2> The {pokemon.genus}</h2>
            <input
                type="checkbox"
                name={isShiny}
                value={isShiny}
                onChange={e => {
                    setShiny(!isShiny)
                }}
            />
            <br/>

            {isShiny ? pokemon.img_shiny.map(img => <img src={img} alt=""/>)
                : pokemon.img.map(img => <img src={img} alt=""/>)}
                <br/>
            {pokemon.evo_sprites.map(url => <img src={url} alt=""/>)}
            <h3>{pokemon.flavor_text}</h3>
            <MoveList props={pokemon.moves} />
        </div>
    )

}

const MoveList = ({props}) => {
    const totalMoves = props.length
    const movesAmount = Math.min(4, totalMoves);
    const movesArray = []
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    const moves = props.map(prop => prop.move.name)
    for (let i = 0; i < movesAmount; i++) {
        shuffleArray(moves)
        movesArray.push(moves.pop().split('-').join(' '));
    }
    return (
        <ul>
            {movesArray.map(move => (<li>{capitalize(move)}</li>))}
        </ul>
    )
}


const Loader = () => {
    return(
        <div>
            <p>Loading...</p>
        </div>
    )
}

export default App;


/*const PokedexContainer = ({main, side, shiny, evolution}) => {
    const {genera} = side;
    const {name, sprites, id, moves, types} = main;
    const display = {name, sprites, id, shiny, genera, evolution};
    const info = {side, moves, types};
    return (
        <div>
            <PokemonDisplay data={display}/>
            {/!*
            <PokemonInfo data={info} />
*!/}
        </div>
    )
};*/



/*
const PokemonDisplay = ({data}) => {
    const {sprites, name, id, shiny, genera, evolution} = data;
    const spriteArray = [];
    shiny ? spriteArray.push(sprites.front_shiny, sprites.back_shiny) : spriteArray.push(sprites.front_default, sprites.back_default);
    let enGenus;
    genera.forEach(genus => {
        if (genus.language.name === 'en') {
            enGenus = genus.genus
        }
    })
    return (
        <div>
            <h1>#{id} {capitalize(name)}</h1>
            <h2>The {enGenus}</h2>
            <BaseSprites sprites={spriteArray} shiny={shiny}/>
        </div>
    )
}
const BaseSprites = ({sprites}) => {
    const [front, back] = sprites
    return (
        <div>
            <img src={front} alt=""/>
            <img src={back} alt=""/>
        </div>
    )
}

const Evolution = () => {

}
/!*
const PokemonInfo = () =>
{
    return(
        <div>
            <MoveList moves={capitalize(moves)} />
        </div>
    )
}*!/
*/



