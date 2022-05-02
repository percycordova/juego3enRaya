import {types} from '../types/types'

const initialState = {
	game: localStorage.getItem('game')
		? JSON.parse(localStorage.getItem('game'))
		: []
	//las combinaciones donde exisitira un ganador
}

export const gameReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case types.gameStar: {
			//agregamos los jusgador al juego en el localsotarge
			localStorage.setItem(
				'game',
				JSON.stringify([
					{player1: actions.payload.player1},
					{player2: actions.payload.player2}
				])
			)
			return [
				{player1: actions.payload.player1},
				{player2: actions.payload.player2}
			]
		}

		default:
			return state
	}
}
