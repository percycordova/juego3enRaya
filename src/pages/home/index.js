import React from 'react'
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min'
import useForm from '../../hooks/UseForm'
import {useDispatch, useSelector} from 'react-redux'
import {playersValidate} from '../../actions/game'
import Swal from 'sweetalert2'
import {login} from '../../actions/auth'
import registerIcon from '../../assets/checkmark.png'

const initialForm = {
	aliasPlayer1: '',
	aliasPlayer2: ''
}
const validateFields = (form) => {
	const errors = {}
	if (!form.aliasPlayer1.trim()) {
		errors.aliasPlayer1 = 'El alias del jugador 1 es requerido'
	}
	if (!form.aliasPlayer2.trim()) {
		errors.aliasPlayer2 = 'El alias del jugador 2 es requerido'
	}
	return errors
}

const Home = () => {
	const history = useHistory()
	const {players} = useSelector((state) => state.players)
	const dispatch = useDispatch()
	const {errors, handleBlur, form, handleChange, resetForm} = useForm(
		initialForm,
		validateFields
	)

	const {aliasPlayer1, aliasPlayer2} = form

	const validateForm = () => {
		if (
			Object.keys(errors).length === 0 &&
			aliasPlayer1.length > 0 &&
			aliasPlayer2.length > 0
		) {
			return true
		} else {
			return false
		}
	}

	const redirectRegister = () => {
		history.push('/home/register')
	}

	const starGame = () => {
		if (validateForm()) {
			playersValidate(
				aliasPlayer1.trim(),
				aliasPlayer2.trim(),
				players,
				dispatch
			).then((resp) => {
				if (resp) {
					dispatch(login())
					resetForm()
				}
			})
		} else {
			Swal.fire('Error', 'Los datos son requeridos', 'error')
		}
	}

	return (
		<div className='home animate__animated animate__fadeIn '>
			<h2 className='home__title animate__animated animate__delay-1s animate__bounce'>
				Bienvenidos al juego 3 en raya
			</h2>
			<h4 className='home__subtitle'>(Modo multijugador)</h4>
			<form action='' className='home__form'>
				<div className='home__content-input'>
					<div className='home__content-input__wrap'>
						<input
							className={`${errors?.aliasPlayer1 && 'border-error'}`}
							type='text'
							placeholder=''
							name='aliasPlayer1'
							onChange={handleChange}
							onBlur={handleBlur}
							value={aliasPlayer1}
						/>
						<label htmlFor=''>
							<span>Alias del juagdor 1</span>
						</label>
					</div>
					{errors.aliasPlayer1 && (
						<span className='msg-error'>{errors.aliasPlayer1}</span>
					)}
				</div>
				<div className='home__content-input'>
					<div className='home__content-input__wrap'>
						<input
							className={`${errors?.aliasPlayer2 && 'border-error'}`}
							type='text'
							placeholder=''
							name='aliasPlayer2'
							onChange={handleChange}
							onBlur={handleBlur}
							value={aliasPlayer2}
						/>
						<label htmlFor=''>
							<span>Alias del jugador 2</span>
						</label>
					</div>
					{errors.aliasPlayer2 && (
						<span className='msg-error'>{errors.aliasPlayer2}</span>
					)}
				</div>
				<div className='homer__form-button'>
					<div type='button' className='button-primary' onClick={starGame}>
						<img src={registerIcon} alt='' />
						Ir al juego
					</div>
					<div className='register'>
						<p>Primera vez en el juego?</p>
						<p onClick={redirectRegister}>Registrese</p>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Home
