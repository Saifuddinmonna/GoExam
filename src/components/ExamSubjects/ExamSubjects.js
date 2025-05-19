import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Topics4 from "./Topics4";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaDatabase, FaServer } from 'react-icons/fa';

const ExamSubjects = () => {
	const topics = useLoaderData();
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');

	// Add more topics to the existing ones
	const additionalTopics = [
		{
			id: "python",
			name: "Python",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			total: 50,
			category: "backend"
		},
		{
			id: "java",
			name: "Java",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
			total: 45,
			category: "backend"
		},
		{
			id: "nodejs",
			name: "Node.js",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			total: 40,
			category: "backend"
		},
		{
			id: "mongodb",
			name: "MongoDB",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			total: 35,
			category: "database"
		},
		{
			id: "typescript",
			name: "TypeScript",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			total: 30,
			category: "frontend"
		},
		{
			id: "docker",
			name: "Docker",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
			total: 25,
			category: "devops"
		}
	];

	// Add categories to API topics
	const apiTopics = topics.data.map(topic => ({
		...topic,
		category: topic.name.toLowerCase().includes('react') || 
				topic.name.toLowerCase().includes('javascript') || 
				topic.name.toLowerCase().includes('css') ? 'frontend' : 'backend'
	}));

	// Combine API topics with additional topics
	const allTopics = [...apiTopics, ...additionalTopics];

	// Category data for the header
	const categories = [
		{ id: 'frontend', icon: <FaCode />, name: "Frontend", count: allTopics.filter(t => t.category === 'frontend').length },
		{ id: 'backend', icon: <FaServer />, name: "Backend", count: allTopics.filter(t => t.category === 'backend').length },
		{ id: 'database', icon: <FaDatabase />, name: "Database", count: allTopics.filter(t => t.category === 'database').length },
		{ id: 'devops', icon: <FaLaptopCode />, name: "DevOps", count: allTopics.filter(t => t.category === 'devops').length }
	];

	// Filter topics based on selected category and search query
	const filteredTopics = allTopics.filter(topic => {
		const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
		const matchesSearch = topic.name.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	// Handle category selection
	const handleCategorySelect = (category) => {
		setSelectedCategory(category);
	};

	// Handle search input
	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* New Topics Header */}
			<div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<div className="container mx-auto px-4 py-16">
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
						className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
					>
						{categories.map((category, index) => (
							<motion.div
								key={category.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
								className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer ${
									selectedCategory === category.id ? 'bg-white/20 ring-2 ring-white' : ''
								}`}
								onClick={() => handleCategorySelect(category.id)}
							>
								<div className="text-3xl mb-3 text-blue-200">{category.icon}</div>
								<h3 className="text-lg font-semibold mb-1">{category.name}</h3>
								<p className="text-blue-200">{category.count} Topics</p>
							</motion.div>
						))}
					</motion.div>

					{/* Search Bar */}
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="max-w-2xl mx-auto mt-12"
					>
						<div className="relative">
							<input
								type="text"
								placeholder="Search for topics..."
								value={searchQuery}
								onChange={handleSearch}
								className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
							/>
							<button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300">
								Search
							</button>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Topics Grid Section */}
			<div className="container mx-auto px-4 py-16">
				{/* Category Filter */}
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mb-8 flex justify-center"
				>
					<div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
						<button 
							className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
								selectedCategory === 'all' 
									? 'text-blue-600 bg-blue-50' 
									: 'text-gray-500 hover:text-gray-700'
							}`}
							onClick={() => handleCategorySelect('all')}
						>
							All Topics
						</button>
						{categories.map(category => (
							<button 
								key={category.id}
								className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
									selectedCategory === category.id 
										? 'text-blue-600 bg-blue-50' 
										: 'text-gray-500 hover:text-gray-700'
								}`}
								onClick={() => handleCategorySelect(category.id)}
							>
								{category.name}
							</button>
						))}
					</div>
				</motion.div>

				{/* Topics Grid */}
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
				>
					{filteredTopics.map((topic) => (
						<Topics4 key={topic.id} topic={topic} />
					))}
				</motion.div>

				{/* No Results Message */}
				{filteredTopics.length === 0 && (
					<motion.div 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-center py-12"
					>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">No topics found</h3>
						<p className="text-gray-600">Try adjusting your search or filter criteria</p>
					</motion.div>
				)}

				{/* Filter Section */}
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-12 bg-white rounded-xl shadow-lg p-6"
				>
					<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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
