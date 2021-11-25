import React, { useState } from "react";

const Search = (props) => {
	const [searchValue, setSearchValue] = useState("Lego");

	const resetInput = () => setSearchValue("");

	const callSearchFunction = (e) => {
		e.preventDefault();
		props.search(searchValue);
		resetInput();
	};

	return (
		<form className="flex justify-center mt-4">
			<input
				className="px-2 py-1 border border-gray-500"
				value={searchValue}
				onInput={(e) => setSearchValue(e.target.value)}
				type="text"
			/>
			<input
				className="px-2 py-1 border border-gray-500 bg-gray-300 text-purple-700"
				onClick={callSearchFunction}
				type="submit"
				value="Search"
			/>
		</form>
	);
};

export default Search;
