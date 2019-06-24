import React from 'react';
import PropTypes from 'prop-types';

const PokemonType = ({ types }) => (
    <div className="type-list">
        <div className="panel-header">Types</div>
        <div className="type-box">
            {
                types.map(type => {
                const { name } = type.type;
                return (
                    <div
                        key={`PokemonType-${name}`}
                        className={"type " + name}
                    >
                        { name }
                    </div>
                );
            })}
        </div>
    </div>
);

PokemonType.propTypes = {
    types: PropTypes.array.isRequired,
};

export default PokemonType;
