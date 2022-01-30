import React from 'react';
import Header from './Header';
import Pitch from './Pitch';
import Feature from './Feature';
import './css/app.css';


const App = () => {
  return (
		<div className='app'>
      <Header />
      <Pitch />
			<Feature/>
			<div>Examples</div>
			<div>Reviews</div>
			<div>Email list</div>
		</div>
	);
}
export default App;