import React from 'react';
import { motion } from 'framer-motion';

const TopicStatItem = ({ topic, index }) => {
    const { name, logo, total } = topic;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4"
        >
            <img src={logo} alt={name} className="w-12 h-12 object-contain" />
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
            </div>
            <div className="text-right">
                <p className="text-xl font-bold text-blue-600">{total}</p>
                <p className="text-xs text-gray-500">Questions</p>
            </div>
        </motion.div>
    );
};

export default TopicStatItem;