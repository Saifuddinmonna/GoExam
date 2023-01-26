import React from "react";
import { useLoaderData } from "react-router-dom";
import Topics4 from "./Topics4";

const ExamSubjects = () => {
	const topics = useLoaderData();
	console.log(topics);

	return (
		<div className="min-widthheader lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid-cols-4 ">
			{topics.data.map((topic) => (
				<Topics4 key={topic.id} topic={topic}></Topics4>
			))}
		</div>
	);
};

export default ExamSubjects;
