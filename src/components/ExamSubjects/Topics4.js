import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Topics4 = ({ topic }) => {
	const { id, name, logo, total } = topic;
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
				className="bg-gray-50 p-6 flex justify-center items-center"
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.2 }}
			>
				<img
					className="w-32 h-32 object-contain"
					src={logo}
					alt={name}
				/>
			</motion.div>

			{/* Content Container */}
			<div className="p-6">
				<motion.h3 
					className="text-xl font-bold text-gray-800 mb-2"
					whileHover={{ scale: 1.02 }}
				>
					{name}
				</motion.h3>
				<p className="text-gray-600 mb-4">
					Total Questions: <span className="font-semibold">{total}</span>
				</p>
				<Link to={`/questions/${id}`} className="block">
					<motion.button 
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
					>
						Start Practice
					</motion.button>
				</Link>
			</div>
		</motion.div>
	);
};

export default Topics4;
// {` ${name}/: ${id} ` }

// grid  sm:grid-cols-1 sm:justify-center sm:items-center sm:align-middle  md:justify-center align-middle items-center grid-cols-4
