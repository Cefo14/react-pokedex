import React from 'react';
import PropTypes from 'prop-types';

import loadingImage from '../../../images/loading.gif';

const PokemonImage = ({ url, isLoading }) => (
    <div>
        <img
            src={isLoading ? loadingImage : url}
            alt="pokemon"
            className="pokemon-sprite"
        />
    </div>
);

PokemonImage.propTypes = {
    url: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default PokemonImage;
