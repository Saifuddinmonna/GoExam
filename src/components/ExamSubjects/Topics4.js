import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBook, FaClock, FaUsers } from 'react-icons/fa';

const Topics4 = ({ topic }) => {
	const { id, name, logo, total } = topic;

	// Generate a random difficulty level for demonstration
	const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'];
	const randomDifficulty = difficultyLevels[Math.floor(Math.random() * difficultyLevels.length)];

	// Generate a random completion time
	const completionTime = Math.floor(Math.random() * 3) + 1;

	return (
		<motion.div 
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ y: -5 }}
			transition={{ duration: 0.3 }}
			className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
		>
			{/* Image Container */}
			<motion.div 
				className="bg-gray-50 p-6 flex justify-center items-center relative"
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.2 }}
			>
				<img
					className="w-32 h-32 object-contain"
					src={logo}
					alt={name}
				/>
				<div className="absolute top-4 right-4">
					<span className={`px-3 py-1 rounded-full text-sm font-medium ${
						randomDifficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
						randomDifficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
						'bg-red-100 text-red-800'
					}`}>
						{randomDifficulty}
					</span>
				</div>
			</motion.div>

			{/* Content Container */}
			<div className="p-6">
				<motion.h3 
					className="text-xl font-bold text-gray-800 mb-2"
					whileHover={{ scale: 1.02 }}
				>
					{name}
				</motion.h3>

				{/* Topic Stats */}
				<div className="grid grid-cols-3 gap-4 mb-4">
					<div className="flex flex-col items-center">
						<FaBook className="text-blue-500 mb-1" />
						<span className="text-sm text-gray-600">{total} Questions</span>
					</div>
					<div className="flex flex-col items-center">
						<FaClock className="text-blue-500 mb-1" />
						<span className="text-sm text-gray-600">{completionTime}h</span>
					</div>
					<div className="flex flex-col items-center">
						<FaUsers className="text-blue-500 mb-1" />
						<span className="text-sm text-gray-600">1.2k Students</span>
					</div>
				</div>

				{/* Progress Bar */}
				<div className="mb-4">
					<div className="w-full bg-gray-200 rounded-full h-2">
						<div 
							className="bg-blue-600 h-2 rounded-full" 
							style={{ width: '0%' }}
						></div>
					</div>
					<p className="text-xs text-gray-500 mt-1">Start learning to track progress</p>
				</div>

				<Link to={`/questions/${id}`} className="block">
					<motion.button 
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
					>
						Start Practice
						<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
						</svg>
					</motion.button>
				</Link>
			</div>
		</motion.div>
	);
};

export default Topics4;
// {` ${name}/: ${id} ` }

// grid  sm:grid-cols-1 sm:justify-center sm:items-center sm:align-middle  md:justify-center align-middle items-center grid-cols-4
