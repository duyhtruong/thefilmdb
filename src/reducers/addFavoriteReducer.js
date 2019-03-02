
export default (state = [], action) =>{
	switch(action.type){
		case 'ADD_FAVORITE':
			return [...state, action.payload]
		
		case 'DELETE_FAVORITE':
			return state.filter(item => item.title !== action.payload)

		default:
			return state;
	}

};