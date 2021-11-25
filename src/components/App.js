import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import Content from "./Content";

const MOVIE_URL = "https://www.omdbapi.com/?s=lego&apikey=2080afd3";

const initialState = {
	loading: true,
	movies: [],
	errorMessage: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SEARCH_MOVIES_REQUEST":
			return {
				...state,
				loading: true,
				errorMessage: null,
			};
		case "SEARCH_MOVIES_SUCCESS":
			return {
				...state,
				loading: false,
				movies: action.payload,
			};
		case "SEARCH_MOVIES_ERROR":
			return {
				...state,
				loading: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

const App = () => {
	// const [movies, setMovies] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [errorMessage, setErrorMessage] = useState(null);

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		axios.get(MOVIE_URL).then((response) => {
			// setMovies([response.data]);
			// setLoading(false);
			dispatch({
				type: "SEARCH_MOVIES_SUCCESS",
				payload: response.data.Search,
			});
		});
	}, []);

	const search = (searchValue) => {
		dispatch({
			type: "SEARCH_MOVIES_REQUEST",
		});
		// setLoading(true);
		// setErrorMessage(null);

		axios
			.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=2080afd3`)
			.then((response) => {
				if (response.status === 200) {
					//setMovies(response.data.Search);
					dispatch({
						type: "SEARCH_MOVIES_SUCCESS",
						payload: response.data.Search,
					});
				} else {
					//setErrorMessage("Klops");
					dispatch({
						type: "SEARCH_MOVIES_ERROR",
						payload: "Klops",
					});
				}
				//setLoading(false);
			});
	};

	const { movies, errorMessage, loading } = state;

	const renderMovies = movies.map((movie, index) => (
		<Movie key={`${index}-${movie.Title}`} movie={movie} />
	));

	if (errorMessage) {
		return (
			<div className="container mx-auto px-4 bg-purple-800 min-h-screen flex flex-col justify-center items-center">
				<h4 className="font-mono text-white">{errorMessage}</h4>
			</div>
		);
	}

	return (
		<div className=" mx-auto p-4 bg-purple-700 min-h-screen">
			<Header text="Search Movie" />
			<Search search={search} />
			<p className="font-mono text-white text-center mb-4">
				Look for the best movies!
			</p>
			<Content loading={loading} errorMessage={errorMessage}>
				{renderMovies ? renderMovies : "BAD"}
			</Content>
		</div>
	);
};

export default App;
