import React from "react";

const Statisticstable = ({ topic }) => {
	console.log(topic);
	const { id, name, logo, total } = topic;
	console.log(total);
	
	// const initialValue = 0;
	// const sumWithInitial = total.reduce(
	// 	(previousValue, currentValue) => previousValue + currentValue,
	// 	initialValue,
	// );
	// console.log(sumWithInitial);
	return (
		<div>
			<div>{name}</div>
			<div>
				{" "}
				<p>Total Question : {total}</p>
			</div>
			<table></table>
		</div>
	);
};
