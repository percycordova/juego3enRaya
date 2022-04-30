import React from 'react'

const Options = ({
	player1,
	player2,
	option,
	handleOption,
	isFirst,
	setIsFirst
}) => {
	console.log(isFirst)

	return (
		<div className='container__options'>
			<h4 className=''>Opciones</h4>
			<hr className='' />
			<div className='option'>
				<fieldset>
					<legend>{player1.alias}</legend>
					<label htmlFor=''>Seleccione una opción</label>
					<select name='' id='' value={option} onChange={handleOption}>
						<option value='X'>X</option>
						<option value='O'>O</option>
					</select>
				</fieldset>
				<fieldset>
					<legend>{player2.alias}</legend>
					<div className='option-default'>
						<p>Opcion por defecto:</p>
						<div>{option === 'X' ? 'O' : 'X'}</div>
					</div>
					<div className='option-default mt-2'>
						<label htmlFor='first'>Desea empezar primero?</label>

						<form>
							<input
								type='checkbox'
								id='first'
								name='first'
								onChange={(e) => {
									setIsFirst(e.target.checked)
								}}
							/>
						</form>
					</div>
				</fieldset>
			</div>
		</div>
	)
}

export default Options
