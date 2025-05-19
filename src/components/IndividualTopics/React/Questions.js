import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const Question = ({ singlequestion, onAnswer }) => {
	const { options, id, question, correctAnswer } = singlequestion;
	const [showAnswer, setShowAnswer] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [isCorrect, setIsCorrect] = useState(null);
	const [hasAnswered, setHasAnswered] = useState(false);

	const ShowcorrectAnswer = () => {
		setShowAnswer(!showAnswer);
	};

	const AnswerCheck = (e) => {
		if (hasAnswered) return; // Prevent multiple answers
		
		const selectedOption = e.target.innerText;
		setSelectedAnswer(selectedOption);
		const isAnswerCorrect = selectedOption === correctAnswer;
		setIsCorrect(isAnswerCorrect);
		setHasAnswered(true);
		
		// Call the parent's onAnswer callback
		onAnswer(isAnswerCorrect);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="relative border m-4 p-6 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-2xl transition-shadow duration-300"
		>
			<motion.div
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				onClick={ShowcorrectAnswer}
				className="absolute -top-3 -left-3 cursor-pointer rounded-full border-2 border-indigo-400 bg-white p-2 shadow-md hover:bg-indigo-50 transition-colors duration-200"
			>
				<EyeIcon className="h-5 w-5 text-indigo-600" />
			</motion.div>

			<motion.h3 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className="text-xl font-semibold text-gray-800 mb-6"
			>
				{question}
			</motion.h3>
			
			<div className="space-y-3">
				<AnimatePresence>
					{options.map((singleoption, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ scale: hasAnswered ? 1 : 1.02 }}
							whileTap={{ scale: hasAnswered ? 1 : 0.98 }}
						>
							<button
								onClick={AnswerCheck}
								disabled={hasAnswered}
								className={`w-full text-left px-4 py-3 rounded-lg bg-white border transition-all duration-200 shadow-sm hover:shadow-md ${
									selectedAnswer === singleoption
										? isCorrect
											? "border-green-500 bg-green-50"
											: "border-red-500 bg-red-50"
										: singleoption === correctAnswer && hasAnswered
											? "border-green-500 bg-green-50"
											: "border-gray-200 hover:border-indigo-400 hover:bg-indigo-50"
								} ${hasAnswered ? "cursor-default" : ""}`}
							>
								<span className="text-gray-700">{singleoption}</span>
							</button>
						</motion.div>
					))}
				</AnimatePresence>
			</div>

			{/* Feedback Section */}
			<AnimatePresence>
				{selectedAnswer && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className={`mt-4 p-3 rounded-lg ${
							isCorrect ? "bg-green-100 border-green-200" : "bg-red-100 border-red-200"
						} border`}
					>
						<p className={`text-sm font-medium ${isCorrect ? "text-green-700" : "text-red-700"}`}>
							{isCorrect ? "✓ Correct answer!" : "✗ Incorrect answer"}
						</p>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Correct Answer Section */}
			<AnimatePresence>
				{showAnswer && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="mt-4 p-3 rounded-lg bg-indigo-100 border border-indigo-200"
					>
						<p className="text-sm font-medium text-indigo-700">
							Correct Answer: {correctAnswer}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Question;

{
	/* <button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 8px);">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
</div> */
}

