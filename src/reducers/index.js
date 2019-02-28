import { combineReducers } from 'redux';
import trendingReducer from './trendingReducer';
import detailReducer from './detailReducer';
import searchReducer from './searchReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	trending: trendingReducer,
	detail : detailReducer,
	search : searchReducer,
	form: formReducer
});