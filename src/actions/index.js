import tmdb from '../apis/tmdb';
import tmdbDetail from '../apis/tmdbDetail';
import tmdbSearch from '../apis/tmdbSearch';


export const getTrending = () => {
	return async (dispatch, getState) => {
		const response = await tmdb.get('/3/discover/movie');
		dispatch({
			type: 'GET_TRENDING',
			payload: response.data.results
		});
		
	};
};

export const getDetail = (id) => {
	return async (dispatch, getState) => {
		const response = await tmdbDetail.get(`/3/movie/${id}`);
		dispatch({
			type: 'GET_DETAIL',
			payload: response.data
		});
	};
};

export const getSearch = (term) => {
	return async (dispatch, getState) => {
		const response = await tmdbSearch.get(`/3/search/movie?query=${term}`);
		dispatch({
			type:'GET_SEARCH',
			payload: response.data.results
		});
		
	}
}

export const addFavorite = (info) => {
	return {
		type: 'ADD_FAVORITE',
		payload: info.title
	};
};