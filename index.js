const movieData = require("./modules/movieData");
const http = require("http");
const fs = require("fs");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");

const templateHome = fs.readFileSync(
	`${__dirname}/templates/home.html`,
	"utf-8"
);

const templateCard = fs.readFileSync(
	`${__dirname}/templates/movieCard.html`,
	"utf-8"
);

const templateDetails = fs.readFileSync(
	`${__dirname}/templates/movieDetails.html`,
	"utf-8"
);

const server = http.createServer((req, res) => {
	const { query, pathname } = url.parse(req.url, true);

	if (pathname === "/") {
		res.writeHead(200, {
			"Content-type": "text/html",
		});

		Promise.all(movieData).then((values) => {
			const cardsHTML = values
				.map((movie) => replaceTemplate(templateCard, movie))
				.join("");
			const output = templateHome.replace("{%PRODUCT_CARDS%}", cardsHTML);
			res.end(output);
		});
	} else if (pathname === "/movie") {
		res.writeHead(200, {
			"Content-type": "text/html",
		});

		res.end(templateDetails);
	} else {
		res.writeHead(404);
		res.end("<h1>Page not found</h1>");
	}
});

server.listen(8000, "127.0.0.1", () => {
	console.log("Listening to requests on port 8000");
});
