import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'

import { type Pokemon, defualtPokemon } from './types/Pokemon'
import PokemonDetails from './components/PokemonDetails'

function App() {
	const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(defualtPokemon)
	return (
		<>
			{selectedPokemon.id!=-1 && (
				<div>
					<h2>Poekmon Seleccionado</h2>
					<PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
				</div>
			)}
			<h1>Bienvenidos a la pokewiki!</h1>
			<PokemonList selectPokemon={setSelectedPokemon}></PokemonList>
		</>
	)
}

export default App
