export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

export const signIn = (name, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch({
				type: SIGN_IN,
				payload: { name, password }
			})
		}, 1000)
	}
}



export const signOut = () => {
	return {
		type: SIGN_OUT
	}
}