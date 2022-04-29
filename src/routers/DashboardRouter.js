/* eslint-disable react/react-in-jsx-scope */
import {Switch, Route} from 'react-router-dom'
import React from 'react'
import {Redirect} from 'react-router-dom'

import Game from '../pages/game'
const DashboardRouter = () => {
	return (
		<Switch>
			<Route exact path='/game' component={Game} />
			<Redirect to='/game' />
		</Switch>
	)
}

export default DashboardRouter
