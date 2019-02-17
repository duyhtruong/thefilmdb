import tmdb from '../apis/tmdb';
import tmdbDetail from '../apis/tmdbDetail';

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