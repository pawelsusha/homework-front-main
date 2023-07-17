import {CurrentUser} from './CurrentUser';
import {UsersObjectType, UserType} from './HW2';
import {useState} from "react";

type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers: ()=>void // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	const [filtered, setFiltered] = useState(false);
	const filterUsers = () => {
		setFiltered(!filtered);
	};
	const getFilteredUsers = () => {
		if (filtered) {
			return props.users.myFriends.filter((user) => user.address.city === 'Los Angeles');
		} else {
			return props.users.myFriends;
		}
	};

	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			{/*<button id={'hw02-filter-button'}  onClick={filterUsers}>SHOW ME FRIENDS FROM LA</button>*/}
			{/*<ul>
			  {props.users.myFriends.map((user) => (
				  <CurrentUser  user={user}/>
			  ))}
			</ul>*/}
			<button id="hw02-filter-button" onClick={filterUsers}>
				{filtered ? 'SHOW ALL FRIENDS' : 'SHOW ME FRIENDS FROM LA'}
			</button>
			<ul>
				{getFilteredUsers().map((user) => (
					<CurrentUser user={user} key={user.id} />
				))}
			</ul>

		</div>
	);
};
