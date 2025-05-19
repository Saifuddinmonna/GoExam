import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 mb-8 md:mb-0"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Master Your Skills with Interactive Quizzes
                        </h1>
                        <p className="text-lg mb-6">
                            Challenge yourself with our comprehensive collection of quizzes. 
                            Learn, practice, and improve your knowledge in various subjects.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/2"
                    >
                        <img 
                            src="https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg" 
                            alt="Quiz Banner" 
                            className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner; 