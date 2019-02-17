import React from 'react';
import Header from './Header';
import Trending from './Trending';
import { connect } from 'react-redux';
import { getDetail } from '../actions';

class Detail extends React.Component{
	componentDidMount(){
		this.props.getDetail(this.props.match.params.id)
	}


	helperRender(){
		if(!this.props.detail.detailsResult){
			return (
			console.log('loading')
			)
		}
		return (
			console.log(this.props.detail.detailsResult.id)
			)
	}

	render(){
		return(
			<div>
				<Header />
				{this.helperRender()}
			
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		detail: state.detail
	}
}

export default connect(mapStateToProps, { getDetail })(Detail);