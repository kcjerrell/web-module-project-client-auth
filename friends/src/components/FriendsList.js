import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from '../util';
import { axiosWithAuth } from '../util/axiosWithAuth';

const Container = styled.div`
	text-align: center;

	form {
		margin: 3em auto;
	}

	.form-inputs {
		text-align: left;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		label {
			font-size: 1em;
			margin: .25em;
		}

		input {
			display: block;
			font-size: 1.1em;
			margin: .1em;
			padding: .2em;
		}

		input[name=age] {
			width: 3em;
		}
	}
`;

const emptyAddFriend = {
	name: "",
	age: "",
	email: ""
}

const FriendsList = props => {
	const [isLoading, setIsLoading] = useState(true);
	const [friends, setFriends] = useState([]);
	const [formData, handleChange] = useForm(emptyAddFriend)

	const addFriendSubmit = e => {
		e.preventDefault();

		setIsLoading(true);

		axiosWithAuth().post("/api/friends", formData)
			.then(response => {
				setFriends(response.data);
				setIsLoading(false);
			})
	};

	useEffect(() => {
		axiosWithAuth().get("/api/friends")
			.then((response) => {
				setFriends(response.data);
				setIsLoading(false);
			});
	}, [])

	return (
		<Container>

			{friends.map(friend => {
				return (
					<div className="friend-item">
						<span>{friend.name}</span>&nbsp;-&nbsp;
						<span>{friend.age}</span>&nbsp;-&nbsp;
						<span>
							<a href={"mailto:" + friend.email}>
								{friend.email}
							</a>
						</span>
					</div>
				);
			})}

			{isLoading &&
				<div>Loading...</div>
			}

			<form onSubmit={addFriendSubmit}>
				<div className="form-inputs">
					<label>Name
						<input name="name" type="text" value={formData.name} onChange={handleChange} />
					</label>

					<label>Age
						<input name="age" type="text" value={formData.age} onChange={handleChange} />
					</label>

					<label>Email
						<input name="email" type="text" value={formData.email} onChange={handleChange} />
					</label>
				</div>
				<input type="submit" value="Add New Friend" />
			</form>

		</Container>
	)
}

export default FriendsList;