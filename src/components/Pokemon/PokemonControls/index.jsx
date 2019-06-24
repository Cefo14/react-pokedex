import React from 'react';
import PropTypes from 'prop-types';

import PokemonControlsButton from './components/PokemonControlsButton';
import PokemonControlsInput from './components/PokemonControlsInput';

const PokemonControls = ({ pokemonId, onChangePokemon, onPrevPokemon, onNextPokemon }) => (
    <div className="panel-row controls">
        <PokemonControlsButton onClick={onPrevPokemon} />
        <PokemonControlsInput id={pokemonId} onChange={onChangePokemon} />
        <PokemonControlsButton onClick={onNextPokemon} />
    </div>
);

PokemonControls.propTypes = {
    pokemonId: PropTypes.number.isRequired,
    onChangePokemon: PropTypes.func.isRequired,
    onPrevPokemon: PropTypes.func.isRequired,
    onNextPokemon: PropTypes.func.isRequired,
};

export default PokemonControls;
