import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
	"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
	const poster =
		movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

	return (
		<div className="flex">
			<a
				href={`https://www.imdb.com/title/${movie.imdbID}/?ref_=fn_al_tt_1`}
				target="_blank"
			>
				<img className="h-20" src={poster} alt={`Movie: ${movie.Title}`} />
			</a>
			<div className="h-16 flex justify-center items-top ml-2">
				<div>
					<a
						href={`https://www.imdb.com/title/${movie.imdbID}/?ref_=fn_al_tt_1`}
						target="_blank"
					>
						<h2 className="font-mono text-white text-center text-xl">
							{movie.Title}
						</h2>
					</a>
					<div className="font-mono text-white text-sm">{movie.Type}</div>
					<div className="font-mono text-white text-sm">{movie.Year}</div>
				</div>
			</div>
		</div>
	);
};

export default Movie;
