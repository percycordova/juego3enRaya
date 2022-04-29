import Swal from 'sweetalert2'
import {types} from '../types/types'

//validamos si existe el alias, si no existe lo agregamos
export const playerValidate = async (player, players, dispatch) => {
	const playerExist = players.find((item) => item.alias === player.alias)
	if (playerExist) {
		Swal.fire('El alias ya existe', 'Ingrese un alias diferente', 'error')
		return false
	} else {
		dispatch(playerRegister(player))
		Swal.fire('Registro exitoso', 'El jugador ha sido registrado', 'success')
		return true
	}
}

export const playerRegister = (player) => {
	return {
		type: types.playersRegister,
		payload: player
	}
}
