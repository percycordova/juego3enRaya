import winnerIcon from '../assets/party.png'
import igualIcon from '../assets/igual.png'
import replayIcon from '../assets/replay.png'
import rankingIcon from '../assets/ranking.png'
import {useDispatch, useSelector} from 'react-redux'
import {saveScorePlayer} from '../actions/game'
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'

const ScoreBoard = ({user1, user2, reset}) => {
	//obtenemos la lista de jugadores
	const {players} = useSelector((state) => state.players)
	const dispatch = useDispatch()
	const history = useHistory()
	const result = () => {
		if (user1.score > user2.score) {
			return user1.alias
		} else if (user1.score < user2.score) {
			return user2.alias
		} else {
			return 'Empate'
		}
	}

	useEffect(() => {
		window.scrollTo({
			left: 0,
			top: document.body.scrollHeight,
			behavior: 'smooth'
		})
	}, [])

	return (
		<div
			id='score-board'
			className='container__score-board board animate__animated animate__fadeInTopRight animate__delay-1s'
		>
			<h4 className=''>Resultado de la partida</h4>
			<hr className='' />
			<div className='container-winner'>
				<p className='winner'>
					{result() === 'Empate'
						? 'La partida culmino empatada'
						: `El ganador es : ${result()}`}
				</p>

				{result() === 'Empate' ? (
					<img src={igualIcon} alt='' />
				) : (
					<img src={winnerIcon} alt='' />
				)}
			</div>

			<div className='option'>
				<fieldset className='fieldset-1'>
					<legend>{user1.alias} </legend>
					<div>
						<p className='score-1'>{user1.score}</p>
						<p className='pts'>pts ganados</p>
					</div>
				</fieldset>
				<fieldset className='fieldset-2'>
					<legend>{user2.alias} </legend>
					<div>
						<p className='score-2'>{user2.score}</p>
						<p className='pts'>pts ganados.</p>
					</div>
				</fieldset>
			</div>
			<div className='container-btns'>
				<button
					className='button-secondary button '
					onClick={() => {
						if (user1.score > user2.score)
							saveScorePlayer(user1, players, dispatch)
						if (user2.score > user1.score)
							saveScorePlayer(user2, players, dispatch)
						reset()
					}}
				>
					<img src={replayIcon} alt='' />
					Repetir partida
				</button>
				<button
					className='button-primary button'
					onClick={() => {
						if (user1.score > user2.score)
							saveScorePlayer(user1, players, dispatch)
						if (user2.score > user1.score)
							saveScorePlayer(user2, players, dispatch)
						reset()
						history.push('/game/ranking')
					}}
				>
					<img src={rankingIcon} alt='' />
					Ver Ranking
				</button>
			</div>
		</div>
	)
}

export default ScoreBoard
