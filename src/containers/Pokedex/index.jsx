/* Creditos Dise~o: https://codepen.io/siliconunicorn/pen/VqoxXP */

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PokedexLeftPanel from './components/PokedexLeftPanel'
import PokedexDivider from '../../components/PokedexDivider';
import PokedexRightPanel from './components/PokedexRightPanel';

import { fetchPokemon as fetchPokemonApi } from '../../api/pokemon';

import { loadnig, fetchPokemon, pokemonLoaded } from '../../contexts/Pokemon/actions';
import withPokedexContext from '../../contexts/Pokemon/withPokedexContext';

import "./style.css";

const Pokedex = ({ state, dispatch }) => {
  const { id } = state;
  useEffect(() => {
    const fetchData = async (id) => {
      dispatch(loadnig());
      const newPokemon = await fetchPokemonApi(id);
      if (newPokemon) {
        dispatch(fetchPokemon(newPokemon));
        dispatch(pokemonLoaded());
      }
    };
    fetchData(id);
  }, [id]);
  return (
    <div id="Pokedex" className="pokedex">
      <PokedexLeftPanel />
      <PokedexDivider />
      <PokedexRightPanel />
    </div>
  )
};

Pokedex.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default withPokedexContext(Pokedex);
