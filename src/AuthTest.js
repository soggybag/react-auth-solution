import { useSelector } from 'react-redux'

function AuthTest(component) {
	const auth = useSelector(state => state.auth)

	if (auth) {
		return component
	}
	return null
}

export default AuthTest