import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => (
	<nav >
		<Link to='/'>
			Stack
		</Link>
		<Link to='/videos'>
			Tareas
		</Link>
	</nav>
);
export default Menu;