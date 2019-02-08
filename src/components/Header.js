import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render(){
		return(
			<div className='ui segment center aligned container'>
				<h1>Movies</h1>
				<div className='ui horizontal list'>
					<div className='item'>
						<Link to='/'>
						<h1 className='ui sub header'>Trending</h1>
						</Link>
					</div>
					<div className='item'>
						<Link to='/favorites'>
						<h1 className='ui sub header'>Favorites</h1>
						</Link>
					</div>
				</div>
				<div className='ui action input fluid'>
					<input type='text' placeholder='Search...'/>
					<button className='ui button'>Search</button>
				</div>
			</div>
		);
	}
};

export default Header;