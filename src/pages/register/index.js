import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'
import {playerValidate} from '../../actions/players'
import useForm from '../../hooks/UseForm'

const initialForm = {
	name: '',
	alias: ''
}
const validateFields = (form) => {
	const errors = {}
	if (!form.name.trim()) {
		errors.name = 'Datos requeridos'
	}
	if (!form.alias.trim()) {
		errors.alias = 'El alias es requerido'
	}
	return errors
}

const Register = () => {
	const history = useHistory()
	const {players} = useSelector((state) => state.players)
	const dispatch = useDispatch()
	const {errors, handleBlur, form, handleChange, resetForm} = useForm(
		initialForm,
		validateFields
	)

	const {name, alias} = form

	const redirectHome = () => {
		history.push('/home')
		resetForm()
	}

	const validateForm = () => {
		if (
			Object.keys(errors).length === 0 &&
			name.length > 0 &&
			alias.length > 0
		) {
			return true
		} else {
			return false
		}
	}

	const handleRegister = (e) => {
		e.preventDefault()
		if (validateForm()) {
			const player = {name, alias, score: 0}
			playerValidate(player, players, dispatch).then((resp) => {
				if (resp) resetForm()
			})
		} else {
			Swal.fire('Error', 'Los datos son requeridos', 'error')
		}
	}
	return (
		<div className='home'>
			<h2 className='home__title'>Registro de jugador</h2>
			<form action='' className='home__form'>
				<div className='home__content-input'>
					<div className='home__content-input__wrap'>
						<input
							className={`${errors?.name && 'border-error'}`}
							type='text'
							placeholder=''
							name='name'
							onChange={handleChange}
							onBlur={handleBlur}
							value={name}
						/>
						<label htmlFor=''>
							<span>Nombres y Apellidos</span>
						</label>
					</div>
					{errors.name && <span className='msg-error'>{errors.name}</span>}
				</div>
				<div className='home__content-input'>
					<div className='home__content-input__wrap'>
						<input
							className={`${errors?.alias && 'border-error'}`}
							type='text'
							placeholder=''
							name='alias'
							onChange={handleChange}
							onBlur={handleBlur}
							value={alias}
						/>
						<label htmlFor=''>
							<span>Ingrese un Alias</span>
						</label>
					</div>
					{errors.alias && <span className='msg-error'>{errors.alias}</span>}
				</div>
				<div className='homer__form-button'>
					<div className='button-secondary' onClick={handleRegister}>
						Registrar
					</div>
					<div type='button' className='button-primary' onClick={redirectHome}>
						Volver
					</div>
				</div>
			</form>
		</div>
	)
}

export default Register
