import React, { useState } from "react";

const Search = (props) => {
	const [searchValue, setSearchValue] = useState("");

	const resetInput = () => setSearchValue("");

	const callSearchFunction = (e) => {
		e.preventDefault();
		props.search(searchValue);
		resetInput();
	};

	return (
		<form>
			<input
				value={searchValue}
				onInput={(e) => setSearchValue(e.target.value)}
				type="text"
			/>
			<input onClick={callSearchFunction} type="submit" value="Search" />
		</form>
	);
};

export default Search;
