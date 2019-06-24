/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PokemonName from '../../../components/Pokemon/PokemonName';
import PokemonImage from '../../../components/Pokemon/PokemonImage'
import PokemonSpecieControls from '../../../components/Pokemon/PokemonSpecieControls';
import PokemonDescription from '../../../components/Pokemon/PokemonDescription';

import { fetchDescription as fetchDescriptionApi } from '../../../api/pokemon';

import {
  fetchDescription,
  toggleView,
  toggleGender,
  toggleShiny,
  descriptionLoaded,
} from '../../../contexts/Pokemon/actions';
import withPokedexContext from '../../../contexts/Pokemon/withPokedexContext';

const PokedexLeftPanel = ({ state, dispatch }) => {
  const {
    pokemon,
    number,
    name,
    sprite,
    description,
    specie,
    loaders,
  } = state;
  const { isFront, isMale, isShiny } = specie;
  const { pokemonIsLoading, descriptionIsLoading } = loaders;
  useEffect(() => {
    const fetchData = async () => {
      const { species } = pokemon;
      const description = await fetchDescriptionApi(species);
      if (description) {
        dispatch(descriptionLoaded());
        dispatch(fetchDescription(description));
      }
    };
    fetchData();
  }, [pokemon]);
  return (
    <div id="PokedexLeftPanel" className="panel left-panel">
        <PokemonName
          number={number}
          name={name}
        />
        <PokemonImage
          url={sprite}
          isLoading={pokemonIsLoading}
        />
        <PokemonSpecieControls
          isFront={isFront}
          isMale={isMale}
          isShiny={isShiny}
          toggleView={() => dispatch(toggleView())}
          toggleGender={() => dispatch(toggleGender())}
          toggleShiny={() => dispatch(toggleShiny())}
        />
        <PokemonDescription
          description={description}
          isLoading={descriptionIsLoading}
        />
    </div>
  );
};

PokedexLeftPanel.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withPokedexContext(PokedexLeftPanel);