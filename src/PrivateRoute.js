import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

// React Router Redux auth routing example
// https://adarshaacharya.com.np/blog/role-based-auth-with-react-router-v6

const PrivateRoute = ({ children }) => {
	let location = useLocation()

	const auth = useSelector(state => state.auth)
	
	if (!auth) {	
		return <Navigate to='/login' state={{ from: location }} />
	}

	return children
}

export default PrivateRoute
