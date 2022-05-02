/* eslint-disable react/react-in-jsx-scope */
import {Switch, Route} from 'react-router-dom'
import React from 'react'
import {Redirect} from 'react-router-dom'

import Game from '../pages/game'
import Ranking from '../pages/ranking'
const DashboardRouter = () => {
	return (
		<Switch>
			<Route exact path='/game' component={Game} />
			<Route exact path='/game/ranking' component={Ranking} />
			<Redirect to='/game' />
		</Switch>
	)
}

export default DashboardRouter
