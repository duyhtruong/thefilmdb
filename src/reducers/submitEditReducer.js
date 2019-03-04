

export default (state = {}, action) => {
	switch(action.type){
		case 'SUBMIT_EDIT':
			return {...state, [action.payload.title] : action.payload.edit}
		default:
			return state;
	}
}