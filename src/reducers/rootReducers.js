import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {gameReducer} from './gameReducer'
import {playersReducer} from './playersReducer'

export const rootReducers = combineReducers({
	players: playersReducer,
	game: gameReducer,
	auth: authReducer
})
