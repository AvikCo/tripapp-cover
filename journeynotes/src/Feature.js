import React from 'react';
import collage from './res/collage.jpg';
import './css/feature.css';
const Feature = () => {
  return (
		<div className='main'>
			<div className='desc'>
				<h2>Customise Photos </h2>
				<p>Upload Edit and do 100 things with your photo</p>
			</div>
			<img className="collage" src={collage} alt="collage" />
		</div>
	);
}

export default Feature;