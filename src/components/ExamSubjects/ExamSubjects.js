import React from "react";
import { useLoaderData } from "react-router-dom";
import Topics4 from "./Topics4";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import { motion } from "framer-motion";

const ExamSubjects = () => {
	const topics = useLoaderData();

	// Add more topics to the existing ones
	const additionalTopics = [
		{
			id: "python",
			name: "Python",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			total: 50
		},
		{
			id: "java",
			name: "Java",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
			total: 45
		},
		{
			id: "nodejs",
			name: "Node.js",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			total: 40
		},
		{
			id: "mongodb",
			name: "MongoDB",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			total: 35
		},
		{
			id: "typescript",
			name: "TypeScript",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			total: 30
		},
		{
			id: "docker",
			name: "Docker",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
			total: 25
		}
	];

	// Combine API topics with additional topics
	const allTopics = [...topics.data, ...additionalTopics];

	return (
		<div className="min-h-screen bg-gray-50">
			<Banner />
			<Features />
			
			<div className="container mx-auto px-4 py-16">
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold text-gray-800 mb-4">Available Topics</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Explore our comprehensive collection of programming topics. Choose your area of interest and start your learning journey today!
					</p>
				</motion.div>

				{/* Category Filter */}
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mb-8 flex justify-center"
				>
					<div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
						<button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
							All Topics
						</button>
						<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
							Frontend
						</button>
						<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
							Backend
						</button>
						<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
							Database
						</button>
					</div>
				</motion.div>

				{/* Topics Grid */}
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
				>
					{allTopics.map((topic) => (
						<Topics4 key={topic.id} topic={topic} />
					))}
				</motion.div>

				{/* Search and Filter Section */}
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-12 bg-white rounded-xl shadow-lg p-6"
				>
					<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
						<div className="w-full md:w-1/3">
							<input
								type="text"
								placeholder="Search topics..."
								className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="flex gap-4">
							<select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
								<option value="">Difficulty Level</option>
								<option value="beginner">Beginner</option>
								<option value="intermediate">Intermediate</option>
								<option value="advanced">Advanced</option>
							</select>
							<select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
								<option value="">Sort By</option>
								<option value="name">Name</option>
								<option value="questions">Questions Count</option>
								<option value="popularity">Popularity</option>
							</select>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ExamSubjects;
