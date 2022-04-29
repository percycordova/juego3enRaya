import {types} from '../types/types'

const initialState = {
	isAuthenticated: false
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.login:
			return {
				isAuthenticated: true
			}
		case types.logout: {
			return {
				isAuthenticated: false
			}
		}
		default:
			return state
	}
}
