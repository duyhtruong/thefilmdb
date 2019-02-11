import _ from 'lodash';

export default (state = [], action) =>{
	switch(action.type){
		case 'GET_TRENDING':
			return [...state, action.payload];
		default:
			return state;
	}

};