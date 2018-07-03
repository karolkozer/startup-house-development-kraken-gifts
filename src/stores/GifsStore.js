import { observable, action, decorate } from 'mobx';
import {
	fetchDetails,
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

	library = {};

	gifDetails = {};

	sort = true;

	isDataLoaded = false;

	isDetailsLoaded = false;

	isNextPageLoaded = true;

	// Actions
	handlePageLoad = () => (this.isNextPageLoaded = !this.isNextPageLoaded);

	handleDataLoaded = () => (this.isDataLoaded = !this.isDataLoaded);

	handleDetailsLoaded = () => (this.isDetailsLoaded = !this.isDetailsLoaded);

	// Library
	checkLibrary = (id) => Object.keys(this.library).find((gif) => gif === id);
	addToLibrary = (gif) => (this.library[gif.id] = gif);

	// Fetch Details
	fetchGifDetails = (id) => {
		// Change isDataLoaded state
		this.isDetailsLoaded = false;
		fetchDetails(id).then((data) => {
			this.gifDetails = { ...data.data };
			console.log(this.gifDetails);
			this.handleDetailsLoaded();
		});
	};

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
	library: observable,
	isDataLoaded: observable,
	isDetailsLoaded: observable,
	isNextPageLoaded: observable,
	fetchGifs: action,
	fetchGifDetails: action,
	fetchSearchGif: action,
	fetchMore: action,
	changeSortOption: action,
	checkLibrary: action,
	addToLibrary: action
});

export default new GifsStore();
