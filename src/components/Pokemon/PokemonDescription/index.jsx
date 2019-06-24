import React from 'react';
import PropTypes from 'prop-types';

const PokemonDescription = ({ description, isLoading }) => (
    <div className="pokemon-description screen">
        { isLoading ? 'Loading...' : description }
    </div>
);

PokemonDescription.propTypes = {
    description: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default PokemonDescription;