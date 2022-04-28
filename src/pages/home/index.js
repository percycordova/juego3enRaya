import React from 'react'
import useForm from '../../hooks/UseForm'

const initialForm = {
	name1: '',
	name2: ''
}
const validateFields = (form) => {
	const errors = {}
	if (!form.name1.trim()) {
		errors.name1 = 'El nombre del jugador 1 es requerido'
	}
	if (!form.name2.trim()) {
		errors.name2 = 'El nombre del jugador 2 es requerido'
	}
	return errors
}

const Home = () => {
	const {errors, handleBlur, form, handleChange} = useForm(
		initialForm,
		validateFields
	)
	const {name1, name2} = form
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<div className='home'>
			<h2 className='home__title'>Bienvenidos al juego de 3 en raya</h2>
			<h4 className='home__subtitle'>(Modo multijugador)</h4>
			<form action='' className='home__form' onSubmit={handleSubmit}>
				<div className='home__content-input'>
					<div className='home__content-input__wrap'>
						<input
							className={`${errors?.name1 && 'border-error'}`}
							type='text'
							placeholder=''
							name='name1'
							onChange={handleChange}
							onBlur={handleBlur}
							value={name1}
						/>
						<label htmlFor=''>
							<span>Nick el juagdor 1</span>
						</label>
					</div>
					{errors.name1 && <span className='msg-error'>{errors.name1}</span>}
				</div>
				<div className='home__content-input'>
					<div className='home__content-input__wrap'>
						<input
							className={`${errors?.name2 && 'border-error'}`}
							type='text'
							placeholder=''
							name='name2'
							onChange={handleChange}
							onBlur={handleBlur}
							value={name2}
						/>
						<label htmlFor=''>
							<span>Nick del jugador 2</span>
						</label>
					</div>
					{errors.name2 && <span className='msg-error'>{errors.name2}</span>}
				</div>
				<div className='homer__form-button'>
					<button type='button' className=''>
						Comenzar
					</button>
					<a href='#'>Registrar jugador</a>
				</div>
			</form>
		</div>
	)
}

export default Home
