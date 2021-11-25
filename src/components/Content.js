import React from "react";

const Grid = ({ loading, errorMessage, children }) => {
	if (loading && !errorMessage) {
		return (
			<div className="bg-purple-900 min-h-screen flex flex-col justify-center items-center">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
				<h4 className="font-mono text-white mt-4">Loading...</h4>
			</div>
		);
	}

	return (
		<div className="bg-purple-600 p-5 grid grid-cols-1 gap-4 justify-center rounded-xl border border-white md:grid-cols-3 xl:grid-cols-6">
			{children}
		</div>
	);
};

export default Grid;
