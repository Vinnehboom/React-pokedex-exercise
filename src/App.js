import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import capitalize from "capitalize-the-first-letter";
import ApiHelper from "./ApiHelper";

function App() {
    // flags
    const [isLoaded, setLoaded] = useState(false);
    const [isInitiazed, setInitialized] = useState(false);
    // state
    const [isShiny, setShiny] = useState(false);
    const [pokemonName, setpokemonName] = useState('');
    const [pokemonObject, setPokemonObject] = useState()

    /*
    function previousPokemon() {
        setPokemonId(previousId => previousId - 1)
    }
    function nextPokemon() {
        setPokemonId(previousId => previousId + 1)
    }
*/

    const Api = new ApiHelper(pokemonName, isShiny)

    const onSubmit =  (event) => {
        setPokemonObject({baseInfo, sideInfo})
        event.preventDefault()
    }

    useEffect(() => {
        setInitialized(true);
        setLoaded(true)
    }, [pokemonObject])

    useEffect(() => {
        setInitialized(false);
        setLoaded(false)})

    return (
        <div>
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
            </form>
                {isInitiazed ?
                    <div>
                        <h1>My Fancy 'Dex</h1>
                        {isLoaded ? <Loader />
                        : 'hello' /*<PokedexContainer object={pokemonObject}/>*/
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

/*const PokedexContainer = ({mainInfo, sideInfo}) => {
    return(
        <div>
            <h1> {mainInfo.name}</h1>
        </div>
    )

}*/


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

const MoveList = ({moves}) => {
    const totalMoves = moves.length
    const movesAmount = Math.min(4, totalMoves);
    const movesArray = []
    for (let i = 0; i < movesAmount; i++) {
        let randomNr = Math.floor(Math.random() * totalMoves);
        movesArray.push((moves[randomNr].move.name).split('-').join(' '));
    }
    return (
        <ul>
            {movesArray.map(move => (<li>{move}</li>))}
        </ul>
    )
}
*/


