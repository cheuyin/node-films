module.exports = (temp, movie) => {
    let output = temp.replace(/{%POSTER%}/g, movie.Poster);
    output = output.replace(/{%TITLE%}/g, movie.Title);
    output = output.replace(/{%YEAR%}/g, movie.Year);
    output = output.replace(/{%RATING%}/g, movie.imdbRating);
    return output;
  }