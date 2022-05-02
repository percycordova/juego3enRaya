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
	if (alias1 === alias2) {
		Swal.fire(
			'Los usuarios no pueden ser iguales',
			'No puede empezar la partida con el mismo jugador',
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

//funcion que devolvera un puntaje dependiendo de los criterios de victoria
//variables bugX y bugO las cree porque hay un bug que siempre el ganador me devueleve una posicion menos
export const scoringCriteria = (listCheckedOptions, winningSymbol) => {
	let bugX = 0
	let bugO = 0
	//si no existe ganador porque lo recibo como false retorno 0
	if (!winningSymbol) return 0
	if (winningSymbol === 'O') {
		bugO = 1
	} else {
		bugX = 1
	}
	let countX = parseInt(
		listCheckedOptions.filter((item) => item === 'X').length + bugX
	)
	let countO = parseInt(
		listCheckedOptions.filter((item) => item === 'O').length + bugO
	)

	if (winningSymbol === 'O') {
		if (countO === 5) return 100
		if (countO === 4) return 150
		if (countO === 3) return 200
	} else {
		if (countX === 5) return 100
		if (countX === 4) return 150
		if (countX === 3) return 200
	}
}

export const gameRulesMensaje = () => {
	Swal.fire({
		title: '<strong>Lee la siguiente información</strong> ',
		showClass: {
			popup: 'animate__animated animate__fadeInDown'
		},
		hideClass: {
			popup: 'animate__animated animate__fadeOutUp'
		},
		html: `
        <div class="msg-play-rules">
         <div>
         <h4>Reglas del juego</h4>
         <ul class='list-rules'>
            <li><span>-</span> Al empezar el juego tienes un recuadro con opciones, donde podras elegir el simbolo para cada jugador, asi como quien inicia la partida.</li>
            <li><span>-</span> Al darle click en empezar partida no podra volver a seleccionar el simbolo ni el turno, hasta que culmine esta e inicies una nueva.</li>
            <li><span>-</span> El primer jugador que encuentre una combinación ganadora, gana la partida.</li>
            <li><span>-</span> El juego termina cuando un jugador gana o cuando se completa el tablero.</li>

         </ul>
         </div>

         <div>
         <h4 class="criteria-title">Criterios de puntuación</h4>
         <ul class='list-rules criteria'>
            <li><span>1. </span>Solo recibe puntaje quien haya ganado el juego </li>
            <li><span>2. </span>Si el jugador gana el juego con tan solo 3 movimientos recibira 200 puntos.</li>
            <li><span>3. </span>Si el jugador gana el juego con 4 movimientos recibira 150 puntos.</li>
            <li><span>4. </span>Si el jugador gana el juego con 5 movimientos recibira 100 puntos.</li>
            <li><span>5. </span>Si no hay ganador ambos jugadores tendran 0 puntos.</li>

         </ul>
         </div>
        </div>
        `,
		showCloseButton: true,
		focusConfirm: true,
		confirmButtonText: '<i class="fa fa-thumbs-up"></i> Listo!'
	})
}

export const saveScorePlayer = (winningPlayer, playerList, dispatch) => {
	const newPlayerList = playerList.map((player) => {
		if (player.alias === winningPlayer.alias) {
			return {...player, score: player.score + winningPlayer.score}
		} else {
			return player
		}
	})

	//ordenamos de forma descendente por puntaje antes de guardarlo
	newPlayerList.sort((a, b) => {
		return a.score > b.score ? -1 : 1
	})

	dispatch({
		type: types.playersSaveScore,
		payload: newPlayerList
	})
	localStorage.setItem('players', JSON.stringify(newPlayerList))
}
