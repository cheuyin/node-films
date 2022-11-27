import fetch from "node-fetch";

const getMovie = async (movieName) => {
	const response = await fetch(
		`http://www.omdbapi.com/?t=${movieName}&plot=full&apikey=92bca6e7`
	);
	const myJson = await response.json();
	console.log(myJson);
};

export default getMovie;
