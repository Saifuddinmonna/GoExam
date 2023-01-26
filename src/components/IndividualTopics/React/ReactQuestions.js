import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Questions";

const Questions = () => {
	const react = useLoaderData();
	const questions = react.data.questions;
	console.log(react);
	console.log(questions);
	return (
		<div className="min-widthheader">
			<h2 className="p-3 m-3 border rounded-circle text-center shadow-lg">
				{react.data.name} Questions For Practice
			</h2>

			<div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-3">
				{questions.map((singlequestion) => (
					<Question
						key={singlequestion.id}
						singlequestion={singlequestion}></Question>
				))}
			</div>
		</div>
	);
};

export default Questions;
