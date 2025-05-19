import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            icon: "📚",
            title: "Diverse Topics",
            description: "Access quizzes across various subjects and difficulty levels"
        },
        {
            icon: "🎯",
            title: "Track Progress",
            description: "Monitor your performance and improvement over time"
        },
        {
            icon: "⏱️",
            title: "Timed Challenges",
            description: "Test your knowledge under pressure with timed quizzes"
        },
        {
            icon: "🏆",
            title: "Achievements",
            description: "Earn badges and rewards as you master different topics"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Why Choose Our Quiz Platform?
                </motion.h2>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Features; 