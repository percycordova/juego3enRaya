import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {firebase} from '../firebase/firebase-config'
import {AuthRouter} from './AuthRouter'
import {useDispatch} from 'react-redux'
import {login} from '../actions/auth'
import SpinnerVentana from '../components/spinners/spinnerVentana/SpinnerVentana'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import DashboardRouter from './DashboardRouter'
import {startLoadingnotes} from '../actions/notes'

export const AppRouter = () => {
	const dispatch = useDispatch()
	const [cheking, setCheking] = useState(true)
	const [isLoggedIn, setIsLoggedId] = useState(false)
	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName))
				setIsLoggedId(true)
				dispatch(startLoadingnotes(user.uid))
			} else {
				setIsLoggedId(false)
			}
			setCheking(false)
		})
	}, [dispatch])

	if (cheking) {
		return <SpinnerVentana />
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRouter
						path='/auth/login'
						exact
						component={AuthRouter}
						isAuthenticated={isLoggedIn}
					/>
					<PrivateRouter
						path='/'
						component={DashboardRouter}
						isAuthenticated={isLoggedIn}
					/>
				</Switch>
			</div>
		</Router>
	)
}
