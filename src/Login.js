import { useState } from "react";
import './Login.css'
import { useDispatch } from 'react-redux'
import { signIn } from './actions'

function Login() {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	return (
		<div className="Login">
			<form
				onSubmit={e => {
					e.preventDefault()
					dispatch(signIn(name, password))
				}}
			>
				<label>
					Name:
					<input 
						type="text" 
						placeholder="name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</label>

				<label>
					Password:
					<input 
						type="password" 
						placeholder="password"
						value={password}
						onChange={e => setPassword(e.target.password)}
					/>
				</label>
				<button>Sumbit</button>
			</form>
		</div>
	)
}

export default Login
