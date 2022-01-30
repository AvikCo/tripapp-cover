import React from 'react';
import './css/pitch.css';

const Pitch = () => {
  return (
		<div className='container'>
			<div className='curve-top'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 319'>
					<path
						fill='#0074D9'
						fillOpacity='1'
						d='M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,213.3C672,213,768,171,864,144C960,117,1056,107,1152,106.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
					></path>
				</svg>
			</div>
			<div className='midPara'>
				<p>
					Create amazing journals with our automated designing tool that will
					never let your beautiful memories fade.
				</p>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 319'>
					<path
						fill='#ffff'
						fillOpacity='1'
						d='M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,213.3C672,213,768,171,864,144C960,117,1056,107,1152,106.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
					></path>
				</svg>
			</div>
			<div className='curve-bottom'></div>
		</div>
	);
}

export default Pitch;