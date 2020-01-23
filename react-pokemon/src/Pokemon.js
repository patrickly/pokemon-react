import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './App.css';

const Pokemon = ({ match }) => {

    console.log('match:', match);
    console.log('match.params.id:', match.params.id);
    // Hint:
    // Combine: https://pokeapi.co/api/v2/pokemon/ + match.params.id
    // The 4th pokemon in the pokedex is Charmander: https://pokeapi.co/api/v2/pokemon/4 

    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    useEffect(() => {

    }, [])

    return (
        // show the name and image of a specific pokemon in this Pokemon component */
        <>  
            <Link to="/">
                home
            </Link>
        </>
    );
}

export default Pokemon;
