import winnerIcon from '../assets/party.png'
import igualIcon from '../assets/igual.png'
import replayIcon from '../assets/replay.png'
import rankingIcon from '../assets/ranking.png'
const ScoreBoard = ({user1, user2, reset}) => {
	const result = () => {
		if (user1.score > user2.score) {
			return user1.alias
		} else if (user1.score < user2.score) {
			return user2.alias
		} else {
			return 'Empate'
		}
	}

	return (
		<div className='container__score-board'>
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
					<legend>{user1.alias}</legend>
					<div>
						<p className='score-1'>{user1.score}</p>
						<p className='pts'>pts</p>
					</div>
				</fieldset>
				<fieldset className='fieldset-2'>
					<legend>{user2.alias}</legend>
					<div>
						<p className='score-2'>{user2.score}</p>
						<p className='pts'>pts</p>
					</div>
				</fieldset>
			</div>
			<div className='container-btns'>
				<button className='button-secondary button ' onClick={() => reset()}>
					<img src={replayIcon} alt='' />
					Repetir partida
				</button>
				<button className='button-primary button'>
					<img src={rankingIcon} alt='' />
					Ver Ranking
				</button>
			</div>
		</div>
	)
}

export default ScoreBoard
