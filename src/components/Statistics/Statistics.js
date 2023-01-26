import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Statisticstable from "./Statisticstable";

const Statistics = () => {
	const totalquestionloder = useLoaderData();
	const [totalquestions, setTotalquestions] = useState([]);
	const [alltotalquestions, setAlltotalquestions] = useState([]);
	const Totalquestion = (selectProduct) => {
		let newCart = [...totalquestions, parseInt(selectProduct.time)];
		setTotalquestions(newCart);

		setTotalquestions(newCart);
		console.log(totalquestions);
		// const totaltimenumber = parseInt(totaltime);
		// { const totaltimesum = totaltimenumber.reduce(
		// 	(accumulator, currentValue) => accumulator + currentValue,
		// );
		// 	console.log( 'reduced',totaltimesum);
		// };

		const getalltotalquestions = totalquestions.reduce(
			(a, v) => (a = a + v),
			parseInt(selectProduct.time),
		);
		setAlltotalquestions(getalltotalquestions);
	};

	return (
		<div className="container text-center">
			<h2 className="text-center fw-bolder">
				Total Questiions Statistic
			</h2>
			{totalquestionloder.data.map((topic) => (
				<Statisticstable key={topic.id} topic={topic}></Statisticstable>
			))}
			{}
			<div>
				<h3>All Total Questions = 36 {alltotalquestions}</h3>
			</div>
		</div>
	);
};

export default Statistics;
