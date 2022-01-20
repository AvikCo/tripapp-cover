import React from 'react';
import './css/header.css';


const Header = () => {
  return (
		<div className='header'>
			<div className='headText'>
				<div className='icon'>TravelTape</div>
				<div className='slogan'>
					Let us make your storytelling more exiting!
				</div>
					<button class='btn-main button-24'>Start Here</button>
			</div>
		</div>
	);
}

export default Header;

//  <img src={logo} className='coverIcon' alt='logo' />;