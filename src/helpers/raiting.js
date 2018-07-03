const raitingSystem = {
	g: 'General Audience',
	pg: 'Parental Guidance Suggested',
	'pg-13': 'Parental Strongly Cautioned',
	r: 'Restricted',
	'nc-17': 'No One 17 And Under Admited'
};

const checkRating = (rating) =>
	raitingSystem[rating] ? raitingSystem[rating] : 'Rating non described';

export default checkRating;
