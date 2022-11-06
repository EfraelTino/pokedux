import { SET_POKEMONS } from "../actions/types";

//necesitamos un estado inicial 
const initalState ={
    pokemon:[],
}; 

//reducer ->funcion pura
export const pokemonsReducer = (state = initalState, actions) =>{
    switch(actions.type){
        case SET_POKEMONS: 
        return{...state, pokemon: actions.payload}
        default:
            return state;
    }
};
