import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import Board from '../../components/Board'
import Options from '../../components/Options'
import ScoreBoard from '../../components/ScoreBoard'

const Game = () => {
	//obtenemos los datos de los jugadores
	const [{player1}, {player2}] = useSelector((state) => state.game)

	//las combinaciones donde exisitira un ganador
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
	const [option, setOption] = useState('X')
	const [isFirst, setIsFirst] = useState(false)
	const [turn, setTurn] = useState(option)
	const [squares, setSquares] = useState(Array(9).fill(null))
	const [winningSquares, setWinningSquares] = useState([])
	const [score, setScore] = useState({
		X: 0,
		O: 0
	})
	const handleOption = (e) => {
		setOption(e.target.value)
	}
	const reset = () => {
		setTurn(option)
		setSquares(Array(9).fill(null))
		setWinningSquares([])
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
		setTurn(null)
		if (result !== null) {
			setScore({
				...score,
				[result]: score[result] + 1
			})
		}
		setWinningSquares(winningPositions)
		setTimeout(reset, 2000)
	}

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
		<div className='container'>
			<h2>A DIVERTIRSE</h2>
			{/* <p>Jugador 1: {player1.alias}</p>
			<p>Jugador 2: {player2.alias}</p> */}
			<Options
				handleOption={handleOption}
				player1={player1}
				player2={player2}
				option={option}
				isFirst={isFirst}
				setIsFirst={setIsFirst}
			/>

			<Board
				winningSquares={winningSquares}
				turn={turn}
				squares={squares}
				onClick={handleClick}
			/>
			<ScoreBoard scoreO={score.O} scoreX={score.X} />
		</div>
	)
}

export default Game
