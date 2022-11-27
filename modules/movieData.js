const fs = require("fs");
const fetch = require("node-fetch");

// Retrieve movie API data for each title in movieQuery.json
const movieQuery = fs.readFileSync(
	`${__dirname + "/.."}/movieQuery.json`,
	"utf-8"
);
const movieQueryObj = JSON.parse(movieQuery);

// Returns movieData as a list of promises
module.exports = movieQueryObj.map(async (movieName) => {
	const response = await fetch(
		`http://www.omdbapi.com/?t=${movieName}&plot=full&apikey=92bca6e7`
	);
	const data = await response.json();
	return data;
});
