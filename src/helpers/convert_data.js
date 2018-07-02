export const sortData = (gifs, status) => {
	return gifs.slice().sort((lastOne, nextOne) => {
		let aDate = lastOne.import_datetime;
		let bDate = nextOne.import_datetime;
		aDate = new Date(aDate);
		bDate = new Date(bDate);
		return status ? (aDate < bDate ? 1 : -1) : aDate > bDate ? 1 : -1;
	});
};
