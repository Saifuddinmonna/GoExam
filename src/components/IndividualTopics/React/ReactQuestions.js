import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Questions";
import { motion } from "framer-motion";

const Questions = () => {
	const react = useLoaderData();
	const questions = react.data.questions;
	const [score, setScore] = useState({
		correct: 0,
		incorrect: 0,
		total: questions.length,
		answered: 0
	});

	const handleAnswer = (isCorrect) => {
		setScore(prev => ({
			...prev,
			correct: isCorrect ? prev.correct + 1 : prev.correct,
			incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect,
			answered: prev.answered + 1
		}));
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-8 px-4">
			<motion.div 
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-7xl mx-auto"
			>
				<div className="text-center mb-12">
					<motion.h2 
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						className="text-4xl font-bold text-indigo-800 mb-4"
					>
						{react.data.name} Questions
					</motion.h2>
					<p className="text-indigo-600 text-lg">
						Test your knowledge with these practice questions
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* Main Questions Section */}
					<motion.div 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
					>
						{questions.map((singlequestion, index) => (
							<motion.div
								key={singlequestion.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-indigo-100 hover:border-indigo-200"
							>
								<Question 
									singlequestion={singlequestion} 
									onAnswer={handleAnswer}
								/>
							</motion.div>
						))}
					</motion.div>

					{/* Score Card Section */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="lg:w-80"
					>
						<div className="sticky top-8 bg-white rounded-xl shadow-lg p-6 border border-indigo-100">
							<h3 className="text-xl font-semibold text-indigo-800 mb-4">Your Progress</h3>
							
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Total Questions:</span>
									<span className="font-semibold text-indigo-800">{score.total}</span>
								</div>
								
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Questions Answered:</span>
									<span className="font-semibold text-indigo-800">{score.answered}</span>
								</div>

								<div className="flex justify-between items-center">
									<span className="text-green-600">Correct Answers:</span>
									<span className="font-semibold text-green-600">{score.correct}</span>
								</div>

								<div className="flex justify-between items-center">
									<span className="text-red-600">Incorrect Answers:</span>
									<span className="font-semibold text-red-600">{score.incorrect}</span>
								</div>

								<div className="pt-4 border-t border-gray-200">
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Score:</span>
										<span className="font-semibold text-indigo-800">
											{score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
										</span>
									</div>
								</div>

								{score.answered === score.total && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="mt-4 p-3 rounded-lg bg-indigo-50 border border-indigo-200"
									>
										<p className="text-center text-indigo-700 font-medium">
											{score.correct === score.total 
												? "🎉 Perfect Score! Amazing job!"
												: score.correct > score.incorrect
													? "👏 Great job! Keep practicing!"
													: "💪 Keep practicing! You'll get better!"}
										</p>
									</motion.div>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Questions;
