import {types} from '../types/types'

export const login = () => {
	return {
		type: types.login
	}
}

export const logout = () => {
	return {
		type: types.logout
	}
}
