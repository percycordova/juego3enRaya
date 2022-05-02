import {types} from '../types/types'

// inicializamos la lista de jugadores
const initialState = {
	players: localStorage.getItem('players')
		? JSON.parse(localStorage.getItem('players'))
		: []
}

export const playersReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case types.playersRegister: {
			//agregamos el jusgador a la lista del localsotarge
			localStorage.setItem(
				'players',
				JSON.stringify([...state.players, actions.payload])
			)
			return {
				...state,
				players: [...state.players, actions.payload]
			}
		}

		case types.playersSaveScore:
			return {
				players: actions.payload
			}

		default:
			return state
	}
}
