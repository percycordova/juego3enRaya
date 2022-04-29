import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/home'
import Register from '../pages/register'

export const AuthRouter = () => {
	return (
		<div className='auth__main'>
			<div className='auth__box-container'>
				<Switch>
					<Route exact path='/home' component={Home} />
					<Route exact path='/home/register' component={Register} />
					<Redirect to='/home' />
				</Switch>
			</div>
		</div>
	)
}
