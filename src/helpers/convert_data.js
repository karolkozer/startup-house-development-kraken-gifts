export const sortData = (gifs, status) => {
	return gifs.slice().sort((lastOne, nextOne) => {
		let aDate = lastOne.import_datetime;
		let bDate = nextOne.import_datetime;
		aDate = new Date(aDate);
		bDate = new Date(bDate);
		return status ? (aDate < bDate ? 1 : -1) : aDate > bDate ? 1 : -1;
	});
};

export const replaceQuery = (query) =>
	query.replace(/[&\/\\#,+=!()$@^*.~%.'":*|?<>{}]/g, '');

export const convertStyleHeight = (img) => {
	const heightGif = parseInt(img, 10);
	const height =
		heightGif > 400
			? heightGif > 500
				? '300px'
				: `${heightGif - 100}px`
			: heightGif <= 150
				? '188px'
				: `${heightGif}px`;
	return { height };
};
