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

export default Statisticstable;


//  className =
// 		"border rounded bg-orange-50 m-3 p-3 shadow grid   md:justify-center align-middle items-center grid-cols-4";