import _ from 'lodash';

export default (state = {}, action) => {
	switch(action.type){
		case 'GET_DETAIL':
			return {...state, detailsResult:action.payload}
		default:
			return state;
	}
}