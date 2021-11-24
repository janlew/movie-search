import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const App = () => {
	const [movies, setMovies] = useState([]);

	const loading = false;
	const errorMessage = false;
	const search = true;
	const test = "Test";

	if (loading && !errorMessage) {
		return (
			<div className="container mx-auto px-4 bg-purple-900 min-h-screen flex flex-col justify-center items-center">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
				<h4 className="font-mono text-white mt-4">Loading...</h4>
			</div>
		);
	}

	if (errorMessage) {
		return (
			<div className="container mx-auto px-4 bg-purple-900 min-h-screen flex flex-col justify-center items-center">
				<h4 className="font-mono text-white">{errorMessage}</h4>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 bg-purple-900 min-h-screen">
			<Header text="Search Movie" />
			<Search search={search} />
			<p>Look for the best movies!</p>
			<div>
				{movies.map((movie, index) => (
					<Movie key={`${index}-${movie.Title}`} movie={movie} />
				))}
			</div>
		</div>
	);
};

export default App;
