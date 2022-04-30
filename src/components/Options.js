import React from 'react'

const Options = ({player1, player2, option, handleOption}) => {
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
				</fieldset>
			</div>
		</div>
	)
}

export default Options
