import React from 'react';
import PropTypes from 'prop-types';

import PokeBall from '../PokeBall';

const Evolution = ({ id, number, name, image }) => (
    <div>
        <div className="flex-center">
            <div className="evo-num">{number}</div>
        </div>
        {
            image
                ? <img src={image} alt="pokemon" className="pokemon-sprite pokemon-sprite-small" />
                : <PokeBall />
        }
        <div className="screen evo-name">{name || "No Data"}</div>
    </div>
);

Evolution.propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Evolution;
