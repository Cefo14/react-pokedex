import React from 'react';
import Pokedex from '../containers/Pokedex';
import { PokemonProvider } from '../contexts/Pokemon';

import './style.css';

const App = () => (
  <div id="App">
    <PokemonProvider>
      <Pokedex />
    </PokemonProvider>
  </div>
);

export default App;
