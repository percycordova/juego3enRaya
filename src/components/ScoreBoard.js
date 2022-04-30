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
			<p className='winner'>
				{result() === 'Empate'
					? 'La partida culmino empatada'
					: `El ganador es : ${result()}`}
			</p>

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
				<button className='button-secondary ' onClick={() => reset()}>
					Volver a jugar{' '}
				</button>
				<button className='button-primary '>Ver Ranking </button>
			</div>
		</div>
	)
}

export default ScoreBoard
