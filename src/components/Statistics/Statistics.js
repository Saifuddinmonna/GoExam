import React, { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import StatCard from "./StatCard";
import TopicStatItem from "./TopicStatItem";
import StatsChart from "./StatsChart";
import { FaListAlt, FaQuestionCircle, FaChartBar } from 'react-icons/fa';

const Statistics = () => {
	const totalquestionloder = useLoaderData();
	const topicsData = totalquestionloder.data || [];

	const summaryStats = useMemo(() => {
		if (!topicsData.length) {
			return { totalTopics: 0, totalQuestions: 0, averageQuestions: 0 };
		}
		const totalTopics = topicsData.length;
		const totalQuestions = topicsData.reduce((sum, topic) => sum + topic.total, 0);
		const averageQuestions = totalTopics > 0 ? (totalQuestions / totalTopics).toFixed(1) : 0;
		return { totalTopics, totalQuestions, averageQuestions };
	}, [topicsData]);


	return (
		<div className="min-h-screen bg-gray-100 py-8 px-4 md:px-8">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-10 text-center"
				>
					<h1 className="text-4xl font-bold text-gray-800">Quiz Statistics</h1>
					<p className="text-lg text-gray-600 mt-2">An overview of our quiz topics and questions.</p>
				</motion.div>

				{/* Summary Stat Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
					<StatCard title="Total Topics" value={summaryStats.totalTopics} icon={<FaListAlt />} color="border-blue-500" />
					<StatCard title="Total Questions" value={summaryStats.totalQuestions} icon={<FaQuestionCircle />} color="border-green-500" />
					<StatCard title="Avg. Questions/Topic" value={summaryStats.averageQuestions} icon={<FaChartBar />} color="border-purple-500" />
				</div>

				{/* Chart */}
				{topicsData.length > 0 && <StatsChart data={topicsData} />}

				{/* Individual Topic Stats */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-10"
				>
					<h2 className="text-2xl font-semibold text-gray-700 mb-6">Breakdown by Topic</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{topicsData.map((topic, index) => (
							<TopicStatItem key={topic.id} topic={topic} index={index} />
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Statistics;
