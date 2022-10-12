import React from 'react';

const Statisticstable = ({topic}) => {
        console.log(topic);
		const { id, name, logo, total } = topic;
		return (
			<div className="border rounded bg-orange-50 m-3 p-3 shadow grid   md:justify-center align-middle items-center grid-cols-4">
				
				<div>{name}</div>
				<div>
					{" "}
					<p>Total Question : {total}</p>
                                </div>
                                <table>

                                </table>
				
			</div>
		);
};

export default Statisticstable;