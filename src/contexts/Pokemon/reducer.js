import {
    FETCH_POKEMON,
    FETCH_DESCRIPTION,
    FETCH_ALL_EVOLUTIONS,
    FETCH_ALL_MOVES,

    TOGGLE,

    LOADING,
    LOADED,
    
    PREV_MOVE,
    NEXT_MOVE,

    PREV_POKEMON,
    NEXT_POKEMON,
    CHANGE_POKEMON,
} from './actions';

/**
 * 
 * @param {Object} state 
 * @param {String} key 
 * @returns {Object}
 * find a specie and sprite by key and return a new state
 */
const _toggleSpecie = (state, key) => {
    const { specie } = state;
    const value = specie[key];
    const newState = {
        ...state,
        specie: {
            ...specie,
            [key]: !value,
        },
    };
    const sprite = _getSprite(newState);
    return { ...newState, sprite };
};

/**
 * 
 * @param {Object} state 
 * @returns {String}
 * find a specie by specie
 */
const _getSprite = ({ pokemon, specie }) => {
    const { sprites } = pokemon;

    if (sprites) {
        const { isFront, isMale, isShiny } = specie;
        const view = isFront ? 'front' : 'back';
        let type = '';
        
        if(isShiny) {
            type = 'shiny';
        }

        else {
            type = isMale ? 'default' : 'female';
        }
        
        const key = `${view}_${type}`;
        const sprite = sprites[key];
        return sprite ? sprite : sprites[`${view}_default`];
    }
    return '';
};

/**
 * 
 * @param {Object} state 
 * @param {String} key 
 * @returns {Object}
 * off a loader
 */
const _loaded = (state, key) => {
    const { loaders } = state;
    return {
        ...state,
        loaders: {
            ...loaders,
            [`${key}IsLoading`]: false,
        },
    };
};

/**
 * 
 * @param {Object} state 
 * @param {Object} payload 
 * @returns {Object}
 * fetch a pokemon
 */
const fetchPokemon = (state, { pokemon }) => {
    const { specie } = state;
    const { id, name } = pokemon;
    const sprite = _getSprite({ pokemon, specie });
    return {
        ...state,
        pokemon,
        number: id,
        name,
        sprite,
    }
}

/**
 * 
 * @param {Object} state 
 * @param {Object} payload 
 * @returns {Object}
 * fetch a pokemon description
 */
const fetchDescription = (state, { description }) => {
    const { flavor_text_entries } = description;
    const foundDescription = flavor_text_entries.find(entrie => (
        entrie.language.name === 'en'
    ));

    if( foundDescription) {
        return {
            ...state,
            description: foundDescription.flavor_text,
        }
    }

    return state;
}

/**
 * 
 * @param {Object} state 
 * @param {Object} payload 
 * @returns {Object}
 * fetch all pokemon evolutions
 */
const fetchAllEvolutions = (state, { evolutions }) => {
    return { ...state, evolutions };
}

/**
 * 
 * @param {Object} state 
 * @param {Object} payload 
 * @returns {Object}
 * fetch all pokemon moves
 */
const fetchAllMoves = (state, { moves }) => {
    const currentMoves = state.moves;
    const id = 0;
    const move = moves[id]
    return {
        ...state,
        moves: {
            ...currentMoves,
            id,
            moves,
            move,
        }
    };
}

/**
 * 
 * @param {Object} state 
 * @param {Object} payload
 * @returns {Object}
 * toggle pokemo specie
 */
const toggle = (state, { type }) => {
    return _toggleSpecie(state, type);
};

/**
 * 
 * @param {Object} state 
 * @returns {Object}
 * set true all loading states
 */
const loadnig = (state) => {
    const loaders = { ...state.loaders };
    for (const key in loaders) {
        loaders[key] = true;
    }
    return { ...state, loaders };
};

/**
 * 
 * @param {Object} state 
 * @param {Object} payload
 * @returns {Object}
 * load a pokemon
 */
const pokemonLoaded = (state, { type }) => {
    return _loaded(state, type);
};

/**
 * 
 * @param {Object} state 
 * @returns {Object}
 * get prev move
 */
const prevMove = (state) => {
    const { moves } = state;
    let { id } = moves;
    id = id > 0 ? id - 1 : 0;
    const move = moves.moves[id];
    return {
        ...state,
        moves: {
            ...moves,
            id,
            move,
        }
    };
};

/**
 * 
 * @param {Object} state 
 * @returns {Object}
 * get next move
 */
const nextMove = (state) => {
    const { moves } = state;
    let { id } = moves;
    id = id >= moves.moves.length ? moves.moves.length - 1 : id + 1;
    const move = moves.moves[id];
    return {
        ...state,
        moves: {
            ...moves,
            id,
            move,
        }
    };
};

/**
 * 
 * @param {Object} state 
 * @returns {Object}
 * get prev pokemon
 */
const prevPokemon = (state) => {
    let { number } = state;
    number = number > 1 ? number - 1 : 1;
    return {
        ...state,
        id: number,
    };
};

/**
 * 
 * @param {Object} state 
 * @returns {Object}
 * get prev pokemon
 */
const nextPokemon = (state) => {
    let { number, count } = state;
    number = number < count ? number + 1 : count;
    return {
        ...state,
        id: number,
    };
};

/**
 * 
 * @param {Object} state 
 * @param {Object} payload 
 * @returns {Object}
 * change a pokemon
 */
const changePokemon = (state, { id}) => {
    return {
        ...state,
        id,
    };
};

export default (state, action) => {
    const { type, payload } = action;
    /* console.log({ type, payload, state }); */
    switch (type) {
        case FETCH_POKEMON:
            return fetchPokemon(state, payload);
        case FETCH_DESCRIPTION:
            return fetchDescription(state, payload);
        case FETCH_ALL_EVOLUTIONS:
            return fetchAllEvolutions(state, payload);
        case FETCH_ALL_MOVES:
            return fetchAllMoves(state, payload);
        case TOGGLE:
            return toggle(state, payload);
        case LOADING:
            return loadnig(state);
        case LOADED:
            return pokemonLoaded(state, payload);
        case PREV_MOVE:
            return prevMove(state);
        case NEXT_MOVE:
            return nextMove(state);
        case PREV_POKEMON:
            return prevPokemon(state);
        case NEXT_POKEMON:
            return nextPokemon(state);
        case CHANGE_POKEMON:
            return changePokemon(state, payload);
        default:
          return state;
    };
};
