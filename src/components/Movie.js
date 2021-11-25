import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
	"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
	const poster =
		movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

	return (
		<div className="mx-auto">
			<div className="h-16 flex justify-center items-center">
				<h2 className="font-mono text-white text-center text-xl">
					{movie.Title}
				</h2>
			</div>
			<div className="flex justify-center">
				<img className="" src={poster} alt={`Movie: ${movie.Title}`} />
			</div>
			<p className="font-mono text-white text-center">{movie.Year}</p>
		</div>
	);
};

export default Movie;
