import _ from 'lodash';

export default (state = {}, action) =>{
	switch(action.type){
		case 'GET_TRENDING':
			return {...state, ..._.mapKeys(action.payload, 'title')}
			
		default:
			return state;
	}

};