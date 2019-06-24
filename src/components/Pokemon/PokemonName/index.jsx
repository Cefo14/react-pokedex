import React from 'react';
import PropTypes from 'prop-types';

const PokemonName = ({ number, name }) => (
    <div className="pokemon-name screen">
        { name }
        <span className="name-no">no. { number }</span>
    </div>
);

PokemonName.propTypes = {
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default PokemonName;
