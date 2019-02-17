import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.themoviedb.org',
	params:{
		api_key: '23df4f4dded45215846668f78df6e8e8',
		language: 'en-US',
	}
});