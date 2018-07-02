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
}

decorate(GifsStore, {
	gifsData: observable,
	fetchGifs: action
});

export default new GifsStore();
