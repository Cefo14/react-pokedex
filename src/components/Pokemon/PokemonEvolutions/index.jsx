import React from 'react';
import PropTypes from 'prop-types';

import Evolution from './components/Evolution';

import loadingImage from '../../../images/loading.gif';

const PokemonEvolutions = ({ evolutions, isLoading }) => (
    <div className="panel-row panel-evo">
        {
            new Array(3).fill(0).map((value, index) => {
                const { id, name } = evolutions[index] || {};
                let { image } = evolutions[index] || {};
                image = isLoading ? loadingImage : image;
                return (
                    <Evolution
                        key={`PokemonEvolutions-${index}-${id}`}
                        id={id || 0}
                        number={''.padStart(index + 1, 'I')}
                        name={name || ''}
                        image={image || ''}
                    />
                )
            })
        }
    </div>
);

PokemonEvolutions.propTypes = {
    evolutions: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default PokemonEvolutions;
