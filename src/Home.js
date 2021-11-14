import SignOutButton from "./SignOutButton"
import { Link, Outlet } from 'react-router-dom'
import AuthTest from './AuthTest'

function Home() {
	return (
		<div>
			<h1>Home</h1>
			{AuthTest(<h2>Only Visible when logged in</h2>)}
			<SignOutButton />
			<Link to="/">Home</Link>
			<Link to="/content">Content</Link>
			<Link to="/login">Login</Link>
			<Outlet />
		</div>
	)
}

export default Home