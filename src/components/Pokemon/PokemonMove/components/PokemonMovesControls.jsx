import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const PokemonMovesControls = ({ onPrevMove, onNextMove }) => {
    return (
        <div className="move-controls">
            <div className="move-arrow" onClick={onPrevMove}>
                <FontAwesomeIcon icon={faCaretUp} />
            </div>
            <div className="move-arrow" onClick={onNextMove}>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
        </div>
    )
};

PokemonMovesControls.propTypes = {
    onPrevMove: PropTypes.func.isRequired,
    onNextMove: PropTypes.func.isRequired,
};

export default PokemonMovesControls;