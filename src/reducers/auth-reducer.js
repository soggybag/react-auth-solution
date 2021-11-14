import { SIGN_IN, SIGN_OUT } from '../actions'

const authReducer = (state = null, action) => {
	switch(action.type) {
		case SIGN_IN: 
			const { name, password } = action.payload
			return { name, password }
		case SIGN_OUT: 
			return null
		default: 
			return state
	}
}

export default authReducer
