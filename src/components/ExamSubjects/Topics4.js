import React from "react";
import { Link } from "react-router-dom";

const Topics4 = ({ topic }) => {
	console.log(topic);
	const { id, name, logo, total } = topic;
	return (
		<div className="border rounded bg-orange-50 m-3 p-3 shadow grid grid-cols-4 ">
			<div>
				<img className="img-fluid w-1/4" src={logo} alt="" />
			</div>
			<div>{name}</div>
			<div>
				{" "}
				<p>Total Question : {total}</p>
			</div>
			<div>
				<Link to={`/questions/${id} `}>
					<button className="btn btn-primary">Practice</button>
				</Link>
			</div>
		</div>
	);
};

export default Topics4;
// {` ${name}/: ${id} ` }
