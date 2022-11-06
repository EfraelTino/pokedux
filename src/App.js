import React, {useEffect, useState} from 'react';
import  { connect } from 'react-redux'
import './App.css';
import { Col } from 'antd';
import Buscar from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './static/pokedux.svg'
import { getPokemons } from './api';
import { setPokemon as setPokemonAction } from './actions';

function App({pokemon, setPokemon}) {
  console.log(pokemon)
  //montamos el componente
  useEffect(() => { 
    //llamamos a la funcion fetchPokemon este sera asincrona llamando a nuestra API que hara un console.log traendo los datos que nos proporciona la API
    const fetchPokemon = async ()=>{
      const  resPokemons = await getPokemons();
      //actualziamos
      setPokemon(resPokemons);
    };
    //llamamos a la funcion
    fetchPokemon();
  }, []);

  return (
    <div className="App ">
      <Col span={4} offset={10}> 
        <img src={logo} alt='pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Buscar />
      </Col>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}

const mapStateToProps = (state) =>({
  pokemon:state.pokemon,
});
const mapDispatchToProps =(dispatch) =>({
  //agregamos la lista de poquemon
  setPokemon:(value) => dispatch(setPokemonAction(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
