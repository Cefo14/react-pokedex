import React from 'react';
import PropTypes from 'prop-types';

const PokemonStats = ({ stats }) => (
    <div className="screen stats">
        {
            stats.map(stat => {
                const name = stat.stat.name;
                const value = stat.base_stat;
                return (
                    <div
                        key={`PokemonStats-${name}-${value}`}
                        className="stat-line"
                    >
                        { name.padEnd(18, '.') }
                        { value }
                    </div>
                );
            })
        }
    </div>
);

PokemonStats.propTypes = {
    stats: PropTypes.array.isRequired,
};

export default PokemonStats;
