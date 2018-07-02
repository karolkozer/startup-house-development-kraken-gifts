import { observable, action, decorate } from 'mobx';
import { fetchTrending, fetchNextPage, limit } from '../helpers/fetch_data';
import { sortData } from '../helpers/convert_data';

class GifsStore {
	gifsData = [];

	pagination = {};

	sort = true;

	isNextPageLoaded = true;

	handlePageLoad = () => (this.isNextPageLoaded = !this.isNextPageLoaded);

	fetchGifs = () =>
		fetchTrending().then((data) => {
			const gifs = [...data.data];
			// Set the data
			this.gifsData = sortData(gifs, this.sort);
			this.pagination = { ...data.pagination };
		});

	fetchMore = () => {
		// Change load next page
		console.log('clicked');
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
			console.log('After', this.pagination.offset);
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
	isNextPageLoaded: observable,
	fetchGifs: action,
	fetchMore: action,
	changeSortOption: action
});

export default new GifsStore();
