import React from 'react'
import fightIcon from '../assets/guantes-de-boxeo.png'
const Options = ({
	player1,
	player2,
	option,
	handleOption,
	showBoard,
	isFirst,
	setIsFirst,
	setShowBoard
}) => {
	return (
		<div className='container__options animate__fadeInRight animate__animated animate__delay-1s'>
			<h4 className=''>Opciones</h4>
			<hr className='' />
			<div className='option'>
				<fieldset>
					<legend>{player1.alias}</legend>
					<label htmlFor=''>Seleccione un símbolo</label>
					<select
						name=''
						id=''
						value={option}
						onChange={handleOption}
						disabled={showBoard}
					>
						<option value='X'>X</option>
						<option value='O'>O</option>
					</select>
				</fieldset>
				<fieldset>
					<legend>{player2.alias}</legend>
					<div className='option-default'>
						<p>Símbolo por defecto:</p>
						<div>{option === 'X' ? 'O' : 'X'}</div>
					</div>
					<div className='option-default mt-2'>
						<label htmlFor='first'>Desea empezar primero?</label>

						<form>
							<input
								type='checkbox'
								id='first'
								name='first'
								disabled={showBoard}
								onChange={(e) => {
									setIsFirst(e.target.checked)
								}}
							/>
						</form>
					</div>
				</fieldset>
			</div>
			{!showBoard && (
				<button
					className='button button-primary'
					onClick={() => setShowBoard(true)}
				>
					<img
						src={fightIcon}
						alt=''
						style={{objectFit: 'cover', height: '30px', width: '36px'}}
					/>
					Empezar Partida
				</button>
			)}
		</div>
	)
}

export default Options
