export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_DESCRIPTION = 'FETCH_DESCRIPTION';
export const FETCH_ALL_EVOLUTIONS = 'FETCH_ALL_EVOLUTIONS';
export const FETCH_ALL_MOVES = 'FETCH_ALL_MOVES';

export const TOGGLE = 'TOGGLE';

export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

export const PREV_MOVE = 'PREV_MOVE';
export const NEXT_MOVE = 'NEXT_MOVE';

export const PREV_POKEMON = 'PREV_POKEMON';
export const NEXT_POKEMON = 'NEXT_POKEMON';
export const CHANGE_POKEMON = 'CHANGE_POKEMON';

/**
 * 
 * @param {Object} pokemon 
 * @returns {Object}
 */
export const fetchPokemon = pokemon => ({
    type: FETCH_POKEMON,
    payload: {
        pokemon,
    },
});

/**
 * 
 * @param {String} description 
 * @returns {Object}
 */
export const fetchDescription = description => ({
    type: FETCH_DESCRIPTION,
    payload: {
        description,
    },
});

/**
 * 
 * @param {Array} moves 
 * @returns {Object}
 */
export const fetchAllEvolutions = evolutions => ({
    type: FETCH_ALL_EVOLUTIONS,
    payload: {
        evolutions,
    },
});

/**
 * 
 * @param {Array} moves 
 * @returns {Object}
 */
export const fetchAllMoves = moves => ({
    type: FETCH_ALL_MOVES,
    payload: {
        moves,
    },
});

/**
 * 
 * @returns {Object}
 */
export const toggleView = () => ({
    type: TOGGLE,
    payload: {
        type: 'isFront',
    },
});

/**
 * 
 * @returns {Object}
 */
export const toggleGender = () => ({
    type: TOGGLE,
    payload: {
        type: 'isMale',
    },
});

/**
 * 
 * @returns {Object}
 */
export const toggleShiny = () => ({
    type: TOGGLE,
    payload: {
        type: 'isShiny',
    },
});

/**
 * 
 * @returns {Object}
 */
export const loadnig = () => ({
    type: LOADING,
    payload: {},
});

/**
 * @returns {Object}
 */
export const pokemonLoaded = () => ({
    type: LOADED,
    payload: {
        type: 'pokemon',
    },
});

/**
 * @returns {Object}
 */
export const descriptionLoaded = () => ({
    type: LOADED,
    payload: {
        type: 'description',
    },
});


/**
 * @returns {Object}
 */
export const evolutionsLoaded = () => ({
    type: LOADED,
    payload: {
        type: 'evolutions',
    },
});

/**
 * @returns {Object}
 */
export const movesLoaded = () => ({
    type: LOADED,
    payload: {
        type: 'moves',
    },
});

/**
 * @returns {Object}
 */
export const prevMove = () => ({
    type: PREV_MOVE,
    payload: {},
});

/**
 * @returns {Object}
 */
export const nextMove = () => ({
    type: NEXT_MOVE,
    payload: {},
});

/**
 * @returns {Object}
 */
export const prevPokemon = () => ({
    type: PREV_POKEMON,
    payload: {},
});

/**
 * @returns {Object}
 */
export const nextPokemon = () => ({
    type: NEXT_POKEMON,
    payload: {},
});

/**
 * @param {String} id
 * @returns {Object}
 */
export const changePokemon = (id) => ({
    type: CHANGE_POKEMON,
    payload: {
        id,
    },
});