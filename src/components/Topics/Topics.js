import React from "react";
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaDatabase, FaServer } from 'react-icons/fa';
import './Topics.css';

const Topics = () => {
	const categories = [
		{
			id: 'frontend',
			icon: <FaCode />,
			name: "Frontend",
			description: "Master modern web development with React, JavaScript, and CSS"
		},
		{
			id: 'backend',
			icon: <FaServer />,
			name: "Backend",
			description: "Learn server-side programming with Node.js, Python, and Java"
		},
		{
			id: 'database',
			icon: <FaDatabase />,
			name: "Database",
			description: "Explore database management with SQL, MongoDB, and more"
		},
		{
			id: 'devops',
			icon: <FaLaptopCode />,
			name: "DevOps",
			description: "Master deployment, containers, and cloud technologies"
		}
	];

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<div className="container mx-auto px-4 py-20">
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h1 className="text-5xl font-bold mb-4">Explore Topics</h1>
						<p className="text-xl text-blue-100 max-w-2xl mx-auto">
							Master programming through interactive quizzes. Choose your path and start your coding journey today.
						</p>
					</motion.div>

					{/* Category Cards */}
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
					>
						{categories.map((category, index) => (
							<motion.div
								key={category.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
								className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
							>
								<div className="text-4xl mb-4 text-blue-200">{category.icon}</div>
								<h3 className="text-xl font-semibold mb-2">{category.name}</h3>
								<p className="text-blue-100">{category.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Features Section */}
			<div className="container mx-auto px-4 py-20">
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-gray-800 mb-4">Interactive Learning Path</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Follow our structured learning paths to master programming concepts step by step
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="bg-white rounded-xl p-8 shadow-lg"
					>
						<h3 className="text-2xl font-semibold text-gray-800 mb-4">Beginner Friendly</h3>
						<p className="text-gray-600">Start with the basics and build a strong foundation in programming concepts</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="bg-white rounded-xl p-8 shadow-lg"
					>
						<h3 className="text-2xl font-semibold text-gray-800 mb-4">Hands-on Practice</h3>
						<p className="text-gray-600">Apply your knowledge with real-world coding challenges and projects</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="bg-white rounded-xl p-8 shadow-lg"
					>
						<h3 className="text-2xl font-semibold text-gray-800 mb-4">Track Progress</h3>
						<p className="text-gray-600">Monitor your learning journey with detailed progress tracking and achievements</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Topics; 