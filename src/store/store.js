import {compose, createStore} from 'redux'
import {rootReducers} from '../reducers/rootReducers'

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose

export const store = createStore(rootReducers, composeEnhancers())
