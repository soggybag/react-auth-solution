import { useDispatch } from 'react-redux'
import { signOut } from './actions'

function SignOutButton() {
	const dispatch = useDispatch()

	return (
		<button
			onClick={() => dispatch(signOut())}
		>Sign Out</button>
	)
}

export default SignOutButton