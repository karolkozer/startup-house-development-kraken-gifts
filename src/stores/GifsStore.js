import { observable, action, decorate } from 'mobx';
import {
	fetchTrending,
	fetchSearch,
	fetchNextPage,
	limit
} from '../helpers/fetch_data';
import { sortData } from '../helpers/convert_data';

class GifsStore {
	// Data
	gifsData = [];

	pagination = {};

	sort = true;

	isDataLoaded = false;

	isNextPageLoaded = true;

	// Actions
	handlePageLoad = () => (this.isNextPageLoaded = !this.isNextPageLoaded);

	handleDataLoaded = () => (this.isDataLoaded = !this.isDataLoaded);

	fetchGifs = () => {
		// Change isDataLoaded state
		this.isDataLoaded = false;

		fetchTrending().then((data) => {
			const gifs = [...data.data];
			// Set the data
			this.gifsData = sortData(gifs, this.sort);
			this.pagination = { ...data.pagination };
			// Change isDataLoaded state
			this.handleDataLoaded();
		});
	};

	fetchSearchGifs = (query) => {
		this.isDataLoaded = false;
		fetchSearch(query).then((data) => {
			// Set the data
			this.gifsData = [...data.data];
			this.pagination = { ...data.pagination };
			// Change isDataLoaded state
			this.handleDataLoaded();
		});
	};

	fetchMore = () => {
		// Change load next page
		this.handlePageLoad();
		// Change teh pagination
		this.pagination.offset = this.pagination.offset + limit + 1;
		// Fetch the data
		return fetchNextPage(this.pagination.offset).then((data) => {
			// Add data
			const gifs = [...this.gifsData, ...data.data];
			// Set the data
			this.gifsData = sortData(gifs, this.sort);
			this.pagination = { ...data.pagination };
			// Change load next page
			this.handlePageLoad();
		});
	};

	changeSortOption = () => {
		// Change the sort state
		this.sort = !this.sort;
		// Sort the data, udpate the gifs data state
		this.gifsData = sortData(this.gifsData, this.sort);
	};
}

decorate(GifsStore, {
	gifsData: observable,
	isDataLoaded: observable,
	isNextPageLoaded: observable,
	fetchGifs: action,
	fetchSearchGif: action,
	fetchMore: action,
	changeSortOption: action
});

export default new GifsStore();
