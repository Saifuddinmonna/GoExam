import React from "react";
import { Link } from "react-router-dom";

const Topics4 = ({ topic }) => {
	console.log(topic);
	const { id, name, logo, total } = topic;
	return (
		<div className="border rounded min-widthheader bg-slate-100  m-3 p-3 shadow text-center md:flex md:justify-around md:items-center">
			<div className="text-center min-widthheaderimg bg-slate-50 rounded-xl">
				<img
					className="img-fluid position-center bg-slate-200 rounded-xl mx-auto"
					src={logo}
					alt=""
				/>
			</div>

			<div>
				<div className="fw-bolder p-2 border rounded m-2 fs-3 ">
					{name}
				</div>
				<div>
					{" "}
					<p className="fw-bolder p-2 border rounded m-2 fs-3">
						Total Question : {total}
					</p>
				</div>
				<div className="fw-bolder p-2 border rounded m-2">
					<Link to={`/questions/${id} `}>
						<button className="btn btn-primary w-full">
							Practice
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Topics4;
// {` ${name}/: ${id} ` }

// grid  sm:grid-cols-1 sm:justify-center sm:items-center sm:align-middle  md:justify-center align-middle items-center grid-cols-4
