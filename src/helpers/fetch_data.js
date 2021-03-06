const API_KEY = 'api_key=2VuK9fQrDMgFx57onbKoF3ddB46VYs8Z';
const BASE_URL = 'https://api.giphy.com/v1/gifs';
const TRENDING_URL = `${BASE_URL}/trending`;
const SEARCH_URL = `${BASE_URL}/search`;

export const limit = 30;
const LIMIT_URL = `limit=${limit}`;

const status = (response) => {
	if (response.status >= 200 && response.status < 400) {
		return Promise.resolve(response);
	} else {
		Promise.reject({
			status: response.status,
			statusText: response.statusText
		});
	}
};

const fetchData = (url) => {
	return fetch(url)
		.then(status)
		.then((response) => response.json())
		.catch((error) => alert(Error(`Request filed HTTP status`)));
};

export const fetchDetails = (id) => {
	const url = `${BASE_URL}/${id}?${API_KEY}`;
	return fetchData(url);
};

export const fetchTrending = () => {
	const url = `${TRENDING_URL}?${LIMIT_URL}&${API_KEY}`;
	return fetchData(url);
};

export const fetchSearch = (query) => {
	const url = `${SEARCH_URL}?q=${query}&${LIMIT_URL}&${API_KEY}`;
	return fetchData(url);
};

export const fetchNextPage = (pagination) => {
	const url = `${TRENDING_URL}?&${LIMIT_URL}&offset=${pagination}&${API_KEY}`;
	return fetchData(url);
};
