import { observable, action, decorate } from 'mobx';
import { fetchTrending } from '../helpers/fetch_data';
import { sortData } from '../helpers/convert_data';

class GifsStore {
	gifsData = [];

	pagination = {};

	sort = false;

	fetchGifs = () =>
		fetchTrending().then((data) => {
			const gifs = [...data.data];
			// Set the data
			this.gifsData = sortData(gifs, this.sort);
			this.pagination = { ...data.pagination };
		});

	changeSortOption = () => {
		// Change the sort state
		this.sort = !this.sort;
		// Sort the data, udpate the gifs data state
		this.gifsData = sortData(this.gifsData, this.sort);
	};
}

decorate(GifsStore, {
	gifsData: observable,
	fetchGifs: action,
	changeSortOption: action
});

export default new GifsStore();
