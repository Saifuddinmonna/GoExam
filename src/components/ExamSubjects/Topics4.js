import React from "react";

const Topics4 = ({ topic }) => {
        console.log(topic);
        const {name,logo, total}=topic;
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
					<button className="btn btn-primary" >Practice</button>
				</div>
			</div>
		);
};

export default Topics4;
