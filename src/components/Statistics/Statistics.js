import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statisticstable from './Statisticstable';

const Statistics = () => {
        const totalquestionloder = useLoaderData();
        
        return (
			<div>
				<h2 className='text-center fw-bolder'>Total Questiions Statistic</h2>
				{totalquestionloder.data.map((topic) => (
					<Statisticstable
						key={topic.id}
						topic={topic}></Statisticstable>
                                )) }
                        <div><h3>All Total Questions { }</h3></div>
			</div>
		);
};

export default Statistics;