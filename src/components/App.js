import React from 'react';
import Trending from './Trending';

import Search from './Search';
import Detail from './Detail';
import Favorites from './Favorites';

import history from '../history';

import { Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<div className='ui container'>

			<Router history={history}>
				<div>
					<Switch>
						<Route path='/thefilmdb/' exact component={Trending} />
						<Route path ='/favorites' exact component={Favorites} />
						<Route path ='/search/:title' exact component={Search} />
						<Route path ='/movie/:id' exact component={Detail} />
					</Switch>
				</div>
			</Router>


		</div>
		);
}

export default App;