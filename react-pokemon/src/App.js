

import React, { useState, useEffect } from 'react'; // https://reactjs.org/docs/hooks-intro.html
import axios from 'axios';
import { Link } from 'react-router-dom'; // Use Link for going to pokemon/:id

import './App.css';

// Can use either functional component or class component
const App = () => {

  // https://reactjs.org/docs/hooks-state.html
  const [pokemonList, setPokemonList] = useState(null); 

  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => { 
    // Can use axios or fetch api to perform http request to: https://pokeapi.co/api/v2/pokemon/?limit=9

  }, [])

  return (
    <div className="App">
      <h1>
        Pokemon React
      </h1>
    </div>
    // Show a list of pokemons in this App component
  );
}

export default App;
