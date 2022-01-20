import React from 'react';
import Header from './Header';
import Pitch from './Pitch';
import './css/app.css';


const App = () => {
  return (
		<div className='app'>
      <Header />
      <Pitch />
			<div>Solution</div>
			<div>Examples</div>
			<div>Reviews</div>
			<div>Email list</div>
		</div>
	);
}
export default App;