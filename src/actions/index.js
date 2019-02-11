import tmdb from '../apis/tmdb';

export const getTrending = () => {
	return async (dispatch, getState) => {
		const response = await tmdb.get('/3/discover/movie');
		dispatch({
			type: 'GET_TRENDING',
			payload: response['total_results']
		});
	};
};