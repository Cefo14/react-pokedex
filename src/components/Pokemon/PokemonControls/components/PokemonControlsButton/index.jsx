import React from 'react';
import PropTypes from 'prop-types';

const PokemonControlsButton = ({ onClick }) => (
    <div role="button" className="button" onClick={onClick} />
);

PokemonControlsButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PokemonControlsButton;
