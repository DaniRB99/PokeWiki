import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'

import { type Pokemon, defualtPokemon } from './types/Pokemon'
import PokemonDetails from './components/PokemonDetails'

function App() {
	const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(defualtPokemon)
	return (
		<>
			<h1 className="Header-title">Pokemon Wiki</h1>
			{selectedPokemon.id!=-1 && (
				<div>
					<h2>Pokemon Seleccionado</h2>
					<PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
				</div>
			)}
			<PokemonList selectPokemon={setSelectedPokemon}></PokemonList>
		</>
	)
}

export default App
