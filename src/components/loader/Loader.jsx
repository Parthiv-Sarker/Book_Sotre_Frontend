import React from "react";

const Loader = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-500 h-16 w-16 md:h-32 md:w-32"></div>
		</div>
	);
};

export default Loader;
