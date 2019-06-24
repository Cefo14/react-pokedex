import React from 'react';
import { PokemonConsumer } from './index';

const withPokedexContext = (Component) => {
     const WrapperComponent = (props) => {
        return (
            <PokemonConsumer>
                { 
                    ({state, dispatch}) => (
                        <Component {...props} state={state} dispatch={dispatch} />
                    )
                }
            </PokemonConsumer>
        );
    };
    return WrapperComponent;
};

export default withPokedexContext;
