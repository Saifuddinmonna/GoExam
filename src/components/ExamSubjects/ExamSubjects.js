import React from "react";
import { useLoaderData } from "react-router-dom";
import Topics4 from "./Topics4";

const ExamSubjects = () => {
	const topics = useLoaderData();
	console.log(topics);

	return (
		<div>
			{topics.data.map((topic) => (
				<Topics4 key={topic.id} topic={topic}></Topics4>
			))}
		</div>
	);
};

export default ExamSubjects;
