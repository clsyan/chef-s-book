import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage/SearchPage'
import LandingPage from './components/LandingPage/LandingPage'



function App() {
	

	
	return (

		<Router>
			<div className='App'>
				<Route exact path='/' component={LandingPage} />
				<Route path='/search' component={SearchPage} />
			</div>
		</Router>
	)
}

export default App