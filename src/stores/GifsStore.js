import { observable, action, decorate } from 'mobx';
import { fetchTrending } from '../helpers/fetch_data';

class GifsStore {
	gifsData = [];
	pagination = {};

	fetchGifs = () =>
		fetchTrending().then((data) => {
			this.gifsData = [...data.data];
			this.pagination = { ...data.pagination };
		});
}

decorate(GifsStore, {
	gifsData: observable,
	fetchGifs: action
});

export default new GifsStore();
