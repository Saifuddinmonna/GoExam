import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4 border-l-4 ${color || 'border-blue-500'}`}
        >
            <div className={`p-3 rounded-full ${color ? color.replace('border-', 'bg-').replace('-500', '-100') : 'bg-blue-100'}`}>
                {React.cloneElement(icon, { className: `w-6 h-6 ${color ? color.replace('border-', 'text-') : 'text-blue-500'}` })}
            </div>
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-2xl font-semibold text-gray-800">{value}</p>
            </div>
        </motion.div>
    );
};

export default StatCard;