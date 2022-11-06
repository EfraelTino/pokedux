import PokemonCard from "./PokemonCard";
import './PokemonList.css'

const PokemonList = ({pokemon}) => {
    return (
        <div className='PokemonList'>
            {pokemon.map((poke) =>{
                return <PokemonCard name={poke.name} key={poke.name}/>
            })}
        </div>
    );
};

// Mientras no se tenga nada podemos retornar props por defecto
PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),//Creamos un arreglo de 10 posiiciones con valores nulos
}
export default PokemonList;