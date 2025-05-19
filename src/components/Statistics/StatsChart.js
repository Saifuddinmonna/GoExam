import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const StatsChart = ({ data }) => {
    const chartData = data.map(topic => ({
        name: topic.name,
        questions: topic.total,
    }));

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg mt-8"
        >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Questions per Topic</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 50 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-35} textAnchor="end" interval={0} style={{ fontSize: '0.8rem' }} />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="questions" fill="#3B82F6" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default StatsChart;