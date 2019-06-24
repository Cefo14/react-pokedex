/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PokemonStats from '../../../components/Pokemon/PokemonStats';
import PokemonType from '../../../components/Pokemon/PokemonType';
import PokemonEvolutions from '../../../components/Pokemon/PokemonEvolutions';
import ButtonChrome from '../../../components/ButtonChrome';
import PokemonMoves from '../../../components/Pokemon/PokemonMove';
import PokemonControls from '../../../components/Pokemon/PokemonControls';

import {
    fetchAllEvolutions as fetchAllEvolutionsApi,
    fetchAllMoves as fetchAllMovesApi,
} from '../../../api/pokemon';
import {
    fetchAllEvolutions,
    evolutionsLoaded,
    fetchAllMoves,
    movesLoaded,
    prevMove,
    nextMove,
    prevPokemon,
    nextPokemon,
    changePokemon,
} from '../../../contexts/Pokemon/actions';
import withPokedexContext from '../../../contexts/Pokemon/withPokedexContext';

const PokedexRightPanel = ({ state, dispatch }) => {
    const { pokemon, evolutions, loaders, number } = state;
    const { stats, types } = pokemon;
    const { evolutionsIsLoading, movesIsLoading } = loaders;
    const { move } = state.moves;

    useEffect(() => {
        const fetchEvolutions = async () => {
          const { species } = pokemon;
          const evolutions = await fetchAllEvolutionsApi(species);
          if(evolutions) {
            dispatch(fetchAllEvolutions(evolutions));
            dispatch(evolutionsLoaded());
          }
        };
        const fetchMoves = async () => {
            const { moves } = pokemon;
            const allMoves = await fetchAllMovesApi(moves);
            if(allMoves) {
              dispatch(fetchAllMoves(allMoves));
              dispatch(movesLoaded());
            }
        };
        fetchEvolutions();
        fetchMoves();
    }, [pokemon]);

    return (
        <div id="PokedexRightPanel" className="panel right-panel">
            <div className="panel-row">
                <PokemonStats stats={stats || []} />
                <PokemonType types={types || []} />
            </div>
            <PokemonEvolutions
                evolutions={evolutions}
                isLoading={evolutionsIsLoading}
            />
            <ButtonChrome />
            <PokemonMoves
                move={move}
                isLoading={movesIsLoading}
                onPrevMove={() => { dispatch(prevMove()) }}
                onNextMove={() => {  dispatch(nextMove()) }}
            />
            <PokemonControls
                pokemonId={number}
                onPrevPokemon={() => { dispatch(prevPokemon()) }}
                onNextPokemon={() => { dispatch(nextPokemon()) }}
                onChangePokemon={(id) => { dispatch(changePokemon(id)) }}
            />
        </div>
    );
};

PokedexRightPanel.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default withPokedexContext(PokedexRightPanel);
