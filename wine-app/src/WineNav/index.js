import React from 'react';
// import WineNavItem from '../WineNavItem';

const WineNav = props => {
	// Map over movieData array and display individual movie component
	let wineItems = props.wines.map(wine => (
		// <WineNavItem movieData={movie} key={movie.id} id={movie.id}
		// 	sendMovieSelected={props.sendMovieSelected} />
      <div>{wine.name}</div>
	));

	return (
		<div className='wine-list'>
			{wineItems}
		</div>
	);
};

export default WineNav;
