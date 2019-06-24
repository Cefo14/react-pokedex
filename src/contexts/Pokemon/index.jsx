import React, { createContext, useReducer } from "react";
import pokemonReducer from './reducer';
const { Provider, Consumer } = createContext();

const MAX_POKEMONS = 807;
const randomPokemonId = Math.floor(Math.random() * MAX_POKEMONS);
const defaultState = {
    id: randomPokemonId,
    pokemon: {},
    number: randomPokemonId,
    name: '',
    description: '',
    sprite: '',
    evolutions: [],
    moves: {
        id: 0,
        move: {},
        moves: {},
    },
    specie: {
        isFront: true,
        isMale: true,
        isShiny: false,
    },
    loaders: {
        pokemonIsLoading: false,
        descriptionIsLoading: false,
        evolutionsIsLoading: false,
        movesIsLoading: false,
    },
    count: MAX_POKEMONS,
};

export const PokemonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(pokemonReducer, defaultState);
    return (
        <Provider value={{state, dispatch}}>
            { children }
        </Provider>
    );
};

export const PokemonConsumer = Consumer;
