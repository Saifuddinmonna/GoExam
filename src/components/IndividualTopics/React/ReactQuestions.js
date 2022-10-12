import React from "react";
import { useLoaderData } from "react-router-dom";

const Questions = () => {
	const react = useLoaderData();
	console.log(react);
	return (
		<div>
			<h2>this is react question </h2>
		</div>
	);
};

export default Questions;
