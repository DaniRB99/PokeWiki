import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"
import {defualtPokemon, type PokeList, type Pokemon } from "../types/Pokemon";
import "./PokemonList.css"

interface props {
    selectPokemon:React.Dispatch<React.SetStateAction<Pokemon>>
}

function PokemonList({selectPokemon}:props) {
    const [pokemons, setPokemons] = useState<PokeList>([defualtPokemon]);

    useEffect(() => {
        getPokemons(20).then((response) => setPokemons(response));
    }, [])

    const fetchPokemon = async (index: number) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await response.json();
        return data
    }

    const getPokemons = async (quantity: number) => {
        const pokemonList:PokeList=[] ;
        for (let i = 1; i < quantity; i++) {
            const pokemon = await fetchPokemon(i);
            pokemonList.push(pokemon);
        }
        return pokemonList;
    }

    const pokemonsCards = pokemons.map((pokemonObj => {
        return <PokemonCard key={pokemonObj.id} pokemon={pokemonObj} selectPokemon={selectPokemon}></PokemonCard>
    }))

    return (
        <ul className="pokemon-list">
            {pokemonsCards}
        </ul>
    )
}

export default PokemonList