import React from 'react';
import PropTypes from 'prop-types';

import PokemonMovesControls from './components/PokemonMovesControls';

const PokemonMoves = ({ move, isLoading, onPrevMove, onNextMove }) =>  {
    const name = move.name || ( move.names ? move.names.filter(m => m.language.name === "en")[0].name : 'xxxx');
    const accuracy = move.accuracy || 'xx';
    const power = move.power || 'xx';
    const pp = move.pp || 'xx';
    const type = move.type ? move.type.name : 'xxxx';
    /* const lvl = move.version_group_details ? move.version_group_details[0].level_learned_at : 'xx'; */
    return (
        <div className="move-list">
            <div className="move-body move-screen screen">
                <div className="move-left">
                    <div className="move-name">
                        { name }
                    </div>
                    <div className="move-stat">
                        { 'Accuracy'.padEnd(16, '.') }
                        { accuracy }
                    </div>
                    <div className="move-stat">
                        { 'AccuPowerracy'.padEnd(16, '.') }
                        { power }
                    </div>
                    <div className="move-stat">
                        { 'PP'.padEnd(16, '.') }
                        { pp }
                    </div>
                </div>
                <div className="move-right">
                    <div className="move-type">
                        { `Type: ${type}` }
                    </div>
                    <div className="move-learn">
                        { /* `Learn: Lvl ${lvl}` */ }
                    </div>
                </div>
            </div>
            {
                !isLoading && <PokemonMovesControls
                    onPrevMove={onPrevMove}
                    onNextMove={onNextMove}
                />
            }
        </div>
    );
};

PokemonMoves.propTypes = {
    move: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onPrevMove: PropTypes.func.isRequired,
    onNextMove: PropTypes.func.isRequired,
};

export default PokemonMoves;
