import axios from 'axios';
import { saveToken, BASE_URL } from '../util/axiosWithAuth';
import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from '../util'

const Container = styled.div`
	text-align: center;

	.login-error {
		background: #FF000044;
		padding: .5em;
	}

	form {
		text-align: left;
		display: flex;
		flex-direction: column;
		align-items: center;

		label {
			font-size: 1.1em;
			margin: .25em;
		}

		input {
			display: block;
			font-size: 1.3em;
			margin: .1em;
			padding: .2em;
		}
	}
`;

const emptyLogin = {
	username: "",
	password: "",
}

const Login = (props) => {
	const { onSuccess } = props;

	const [formData, handleChange] = useForm(emptyLogin);
	const [isLoading, setIsLoading] = useState(false);
	const [loginError, setLoginError] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		setIsLoading(true);

		axios.post(BASE_URL + "/api/login", { username: formData.username, password: formData.password })

			.then((response) => {
				const token = response.data.payload;
				saveToken(token);

				if (onSuccess)
					onSuccess();
			})

			.catch((error) => {
				console.log(error);
				setLoginError("Couldn't log in!");
				setIsLoading(false);
			})
	}

	return (
		<Container>
			{loginError &&
				<div className="login-error">
					{loginError}
				</div>
			}

			<form onSubmit={handleSubmit}>
				<label>Username:
					<input type="text" name="username" value={formData.username} onChange={handleChange} />
				</label>
				<label>
					Password:
					<input type="password" name="password" value={formData.password} onChange={handleChange} />
				</label>
				<input type="submit" value={"Login"} disabled={isLoading} />
			</form>
		</Container>
	)
};

export default Login;
