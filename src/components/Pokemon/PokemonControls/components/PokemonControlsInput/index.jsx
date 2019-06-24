import React from 'react';
import PropTypes from 'prop-types';

const delay = 1000;
let inverval = null;

const PokemonControlsInput = ({ id, onChange }) => (
    <div className="num-input-container">
        <input
            type="number"
            className="screen num-input"
            placeholder={id}
            onChange={
                (event) => {
                    const { value } = event.currentTarget;
                    clearTimeout(inverval);
                    inverval = setTimeout(() => {
                        onChange(value);
                    }, delay);
                }
            }
        />
    </div>
);

PokemonControlsInput.propTypes = {
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default PokemonControlsInput;
