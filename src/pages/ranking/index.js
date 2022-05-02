import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import medal1 from '../../assets/medal1.svg'
import medal2 from '../../assets/medal2.svg'
import medal3 from '../../assets/medal3.svg'
import iconBack from '../../assets/back.png'
import iconHome from '../../assets/switch.png'
import {useHistory} from 'react-router-dom'
import {logout} from '../../actions/auth'
const Ranking = () => {
	const {players} = useSelector((state) => state.players)
	const history = useHistory()
	const dispatch = useDispatch()
	return (
		<div className='ranking animate__animated animate__fadeIn '>
			<h4 className='ranking animate__animated animate__bounceIn'>Ranking</h4>
			{players.map((player, index) => {
				return (
					<div
						className='card-player animate__animated animate__fadeInRightBig animate__delay-1s'
						key={`id-${player.alias}`}
					>
						<div className='card-player__data'>
							<div>
								{index + 1 === 1 && <img src={medal1} alt='' />}
								{index + 1 === 2 && <img src={medal2} alt='' />}
								{index + 1 === 3 && <img src={medal3} alt='' />}
								{index + 1 > 3 && <div className='img-null'>{index + 1}</div>}
							</div>

							<div className='content-alias-name'>
								<p className='alias'>{player.alias}</p>
								<p className='name'>{player.name}</p>
							</div>
						</div>
						<p className='card-player__score'>
							<span>{player.score} </span> <i>ptos</i>
						</p>
					</div>
				)
			})}

			<div className='content-button'>
				<div className='button-secondary' onClick={() => history.push('/game')}>
					<img src={iconBack} alt='' />
					Regresar a la partida
				</div>
				<div className=' button-primary' onClick={() => dispatch(logout())}>
					<img src={iconHome} alt='' />
					Salir del juego
				</div>
			</div>
		</div>
	)
}

export default Ranking
