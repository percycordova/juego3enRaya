import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {gameRulesMensaje, scoringCriteria} from '../../actions/game'
import Board from '../../components/Board'
import Options from '../../components/Options'
import ScoreBoard from '../../components/ScoreBoard'
import importIcon from '../../assets/importante.png'
const winningPositions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
const Game = () => {
	//obtenemos los datos del juego
	const [{player1}, {player2}] = useSelector((state) => state.game)
	const [user1, setUser1] = useState({...player1})
	const [user2, setUser2] = useState({...player2})
	//opcion para elegir el simbolo
	const [option, setOption] = useState('X')
	//opcion para ver quien empieza primero
	const [isFirst, setIsFirst] = useState(false)
	//opcion para evaluar el turno
	const [turn, setTurn] = useState(option)
	//creamos un array de 9 posiciones que contendra mis celdas
	const [squares, setSquares] = useState(Array(9).fill(null))
	//creamos un arry que contendra la posiciones ganadoras
	const [winningSquares, setWinningSquares] = useState([])
	//creamos un state que manejara si se muestra o no el resultado
	const [showScoreBoard, setShowScoreBoard] = useState(false)
	//creamos un state que manejara si se muestra o no el tablero
	const [showBoard, setShowBoard] = useState(false)
	const [score, setScore] = useState({
		X: 0,
		O: 0
	})
	const handleOption = (e) => {
		setOption(e.target.value)
	}
	const reset = () => {
		setSquares(Array(9).fill(null))
		setWinningSquares([])
		setShowScoreBoard(false)
		setIsFirst(false)
		document.getElementById('first').checked = false
		setShowBoard(false)
		setOption('X')
		setTurn(option)
		setScore({
			X: 0,
			O: 0
		})
	}

	const checkForWinner = (newSquares) => {
		for (let i = 0; i < winningPositions.length; i++) {
			const [a, b, c] = winningPositions[i]
			if (
				newSquares[a] &&
				newSquares[a] === newSquares[b] &&
				newSquares[a] === newSquares[c]
			) {
				endGame(newSquares[a], winningPositions[i])
				return
			}
		}

		if (!newSquares.includes(null)) {
			endGame(null, Array.from(Array(10).keys()))
			return
		}
		setTurn(turn === 'X' ? 'O' : 'X')
	}

	const handleClick = (square) => {
		let newSquares = [...squares]
		newSquares.splice(square, 1, turn)
		setSquares(newSquares)
		checkForWinner(newSquares)
	}

	const endGame = (result, winningPositions) => {
		if (result !== null) {
			setScore({
				...score,
				[result]: scoringCriteria(squares, result)
			})
		}
		setTurn(null)
		setWinningSquares(winningPositions)
		setShowScoreBoard(true)
	}

	//aca seteamos los usuarios usuario
	useEffect(() => {
		if (option === 'X') {
			setUser1({...player1, score: score.X})
			setUser2({...player2, score: score.O})
		} else {
			setUser1({...player1, score: score.O})
			setUser2({...player2, score: score.X})
		}
	}, [score, option, player1, player2])

	//aca valido quien empieza el turno
	useEffect(() => {
		if (isFirst) {
			if (option === 'X') {
				setTurn('O')
			} else {
				setTurn('X')
			}
		} else {
			setTurn(option)
		}
	}, [option, isFirst])

	return (
		<div className='container animate__animated animate__fadeIn '>
			<h2>A DIVERTIRSE</h2>
			<div
				className='game-rules animate__animated animate__shakeY animate__delay-1s'
				onClick={() => gameRulesMensaje()}
			>
				<img src={importIcon} alt='' />
				Leer las reglas del juego
			</div>
			<Options
				handleOption={handleOption}
				player1={player1}
				player2={player2}
				option={option}
				showBoard={showBoard}
				isFirst={isFirst}
				setIsFirst={setIsFirst}
				setShowBoard={setShowBoard}
			/>
			{showBoard && (
				<Board
					winningSquares={winningSquares}
					turn={turn}
					squares={squares}
					onClick={handleClick}
				/>
			)}

			{showScoreBoard && (
				<ScoreBoard user1={user1} user2={user2} reset={reset} />
			)}
		</div>
	)
}

export default Game
