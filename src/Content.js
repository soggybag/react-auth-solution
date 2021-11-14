import { useSelector } from 'react-redux'

function Content() {
	const auth = useSelector(state => state.auth)

	return (
		<div>
			<h1>Secret Content</h1>
			<p>Some Secret content you should only see this when logged in</p>
			<p>{auth.name} is signed in.</p>
		</div>
	)
}

export default Content