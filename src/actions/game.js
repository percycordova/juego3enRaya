import Swal from 'sweetalert2'
import {types} from '../types/types'

export const playersValidate = async (alias1, alias2, players, dispatch) => {
	const alias1Exist = players.find((player) => player.alias === alias1)
	const alias2Exist = players.find((player) => player.alias === alias2)
	if (!alias1Exist) {
		Swal.fire(
			`El usuario con el alias ${alias1} no esta registrado`,
			'Registrese para poder jugar',
			'error'
		)
		return false
	}
	if (!alias2Exist) {
		Swal.fire(
			`El usuario con el alias ${alias2} no esta registrado`,
			'Registrese para poder jugar',
			'error'
		)
		return false
	}
	dispatch(
		starGame({
			player1: alias1Exist,
			player2: alias2Exist
		})
	)
	return true
}

export const starGame = (players) => {
	return {
		type: types.gameStar,
		payload: players
	}
}
