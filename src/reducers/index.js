import { combineReducers } from 'redux';
import trendingReducer from './trendingReducer';
import detailReducer from './detailReducer';

export default combineReducers({
	trending: trendingReducer,
	detail : detailReducer
});