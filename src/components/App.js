import React from 'react';
import Trending from './Trending';

import Search from './Search';
import Detail from './Detail';
import Favorites from './Favorites';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<div className='ui container'>

			<BrowserRouter>
				<div>
					<Switch>
						<Route path='/' exact component={Trending} />
						<Route path ='/favorites' exact component={Favorites} />
						<Route path ='/movie/search/:title' exact component={Search} />
						<Route path ='/movie/:id' exact component={Detail} />
					</Switch>
				</div>
			</BrowserRouter>


		</div>
		);
}

export default App;