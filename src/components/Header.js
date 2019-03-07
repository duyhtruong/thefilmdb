import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { getSearch } from '../actions';
import history from '../history';
import './index.css';


class Header extends React.Component {
	
	onSubmit = (formValues) => {
	
		history.push(`/search/${formValues.search}`)
		this.props.getSearch(formValues.search)


	}




	render(){
		return(
			<div className='ui blue inverted tertiary center aligned segment '>
				<div className="ui hidden divider"></div>
			
					<Link to='/'>
						<div>
							<img 
								src={require('../filmdblogo2.png')}
								alt='' />
						</div>
					</Link>


<div className="ui hidden divider"></div>

				<div className='ui horizontal inverted list '>
					
					<div className='item'>
						<i className="large chart line icon"></i>
						<div className='top aligned content'>
							<Link to='/'>
							<h1>Trending</h1>
							</Link>
						</div>
					</div>

					<div className='item '>
						<i className="large heart icon"></i>
						<div className='top aligned content'>
							<Link to='/favorites'>
							<h1>Favorites</h1>
							</Link>
						</div>
					</div>

		
				</div>



				<SearchBar onSubmit={this.onSubmit} />
			</div>
		);
	}
};

export default connect(null, { getSearch })(Header);