import React from "react";
import { useLoaderData } from "react-router-dom";
import Topics4 from "./Topics4";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import { motion } from "framer-motion";

const ExamSubjects = () => {
	const topics = useLoaderData();

	return (
		<div>
			<Banner />
			<Features />
			<div className="container mx-auto px-4 py-16">
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl font-bold text-gray-800 mb-4">Available Topics</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Choose from our wide range of topics and start your learning journey today!
					</p>
				</motion.div>

				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
				>
					{topics.data.map((topic) => (
						<Topics4 key={topic.id} topic={topic}></Topics4>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default ExamSubjects;
