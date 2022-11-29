module.exports = (temp, movie) => {
	let output = temp.replace(/{%POSTER%}/g, movie.Poster);
	output = output.replace(/{%TITLE%}/g, movie.Title);
	output = output.replace(/{%YEAR%}/g, movie.Year);
	output = output.replace(/{%RATING%}/g, movie.imdbRating);
	output = output.replace(/{%ID%}/g, movie.id);
	output = output.replace(/{%DESCRIPTION%}/g, movie.Plot);
	output = output.replace(/{%RUNTIME%}/g, movie.Runtime);
	output = output.replace(/{%DIRECTOR%}/g, movie.Director);
	return output;
};
