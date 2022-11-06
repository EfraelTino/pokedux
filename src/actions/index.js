import { SET_POKEMONS } from "./types"
//aca tendremos nuestros actions creator
export const setPokemon = (payload) => ({
    type: SET_POKEMONS,
    payload,
})