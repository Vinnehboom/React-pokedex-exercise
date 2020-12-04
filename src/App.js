import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Client from "./ApiHelper";
import capitalize from 'capitalize-the-first-letter'
import styled from 'styled-components'

import Header from "./components/Header";
import DynamicContent from "./components/Dynamic";
import PokedexContainer from './components/PokedexContainer'

function App() {
    // flags
    const [isLoading, setLoading] = useState(false);
    const [isInitiazed, setInitialized] = useState(false);
    // state
    const [pokemon, setPokemon] = useState()
/*
    function previousPokemon(pokemonId, shiny) {
        setLoading(true)
        getPokemonData(pokemonId, shiny)
    }
*/
    /*function nextPokemon() {
        setPokemonId(previousId => previousId + 1)
    }*/
    const client = new Client()

    const getPokemonData = (name, shiny) => {
        client.getPokemonByName(name, shiny).then(pokemon => {
            setPokemon(pokemon)
            setTimeout(() => setLoading(false), 500)
        })
    }
    const onSubmit = (name, shiny) => {
        setInitialized(true)
        setLoading(true)
        getPokemonData(name, shiny)
    }

    return (
        <div>
            <Header onSubmit={onSubmit} />
            {isInitiazed ?
                <div>

                    {isLoading ? <DynamicContent/>
                        : <PokedexContainer loading={setLoading} pokemon={pokemon} /*previousPokemon={previousPokemon}*//>
                    }
                </div>
                : ''
            }
        </div>
    );
}

export default App;