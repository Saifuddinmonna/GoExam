import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Questions";

const Questions = () => {
	const react = useLoaderData();
	const questions = react.data.questions;
	console.log(questions);
	return (
		<div className="grid grid-cols-2" >
			{questions.map((singlequestion) => (
				<Question
					key={singlequestion.id}
					singlequestion={singlequestion}></Question>
			))}
		</div>
	);
};

export default Questions;
