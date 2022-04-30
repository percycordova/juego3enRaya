import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {AuthRouter} from './AuthRouter'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import DashboardRouter from './DashboardRouter'
import {useSelector} from 'react-redux'

export const AppRouter = () => {
	const {isAuthenticated} = useSelector((state) => state.auth)

	return (
		<Router>
			<div>
				<Switch>
					<PublicRouter
						path='/home'
						exact
						component={AuthRouter}
						isAuthenticated={isAuthenticated}
					/>
					<PrivateRouter
						path='/'
						component={DashboardRouter}
						isAuthenticated={isAuthenticated}
					/>
				</Switch>
			</div>
		</Router>
	)
}
