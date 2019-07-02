import React from 'react';
import './_Header.scss';

export const Header = () => {
	return(
		<header>
			<h1>Color Catcher</h1>
			<button className='generate'>Generate Colors</button>
		</header>
	)
}