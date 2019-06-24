import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faMars, faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

const PokemonSpecieControls = ({
    isFront,
    isMale,
    isShiny,
    toggleView,
    toggleGender,
    toggleShiny,
}) => (
    <div className="sprite-controls">
        <div
            role="button"
            className={
                classnames(
                    'sprite-control',
                    'sprite-controls-gender',
                )
            }
            onClick={toggleGender}
        >
            {
                isMale
                    ? <FontAwesomeIcon icon={faMars} />
                    : <FontAwesomeIcon icon={faVenus} />
            }
        </div>
        <div
            className={
                classnames(
                    'sprite-control',
                    'sprite-controls-shiny',
                    {
                        'sprite-control-selected': isShiny,
                        'sprite-controls-shiny-selected': isShiny,
                    }
                )
            }
            onClick={toggleShiny}
        >
            <span>shiny</span>
        </div>
        <div
            className={
                classnames(
                    'sprite-control',
                    'sprite-controls-rotate',
                )
            }
            onClick={toggleView}
        >
            {
                isFront
                    ? <FontAwesomeIcon icon={faRedo} />
                    : <FontAwesomeIcon icon={faUndo} />
            }
        </div>
    </div>
);

PokemonSpecieControls.propTypes = {
    isFront: PropTypes.bool.isRequired,
    isMale: PropTypes.bool.isRequired,
    isShiny: PropTypes.bool.isRequired,
    toggleView: PropTypes.func.isRequired,
    toggleGender: PropTypes.func.isRequired,
    toggleShiny: PropTypes.func.isRequired,
};

export default PokemonSpecieControls;
