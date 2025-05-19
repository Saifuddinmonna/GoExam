import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import articles from "../../data/articles";

const Blog = () => {
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const articlesPerPage = 6;

	// Calculate pagination
	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
	const currentArticles = articles?.slice(indexOfFirstArticle, indexOfLastArticle) || [];
	const totalPages = Math.ceil((articles?.length || 0) / articlesPerPage);

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

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleReadMore = (articleId) => {
		navigate(`/blog/${articleId}`);
	};

	if (!articles || articles.length === 0) {
		return (
			<div className="min-h-screen bg-gray-50 py-12">
				<div className="container mx-auto px-4">
					<div className="text-center">
						<h1 className="text-2xl font-bold text-gray-800 mb-4">No Articles Found</h1>
						<p className="text-gray-600">Please check back later for new content.</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h1 className="text-4xl font-bold text-gray-800 mb-4">React Development Blog</h1>
					<p className="text-xl text-gray-600">Latest insights, tutorials, and best practices in React development</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{currentArticles.map((article) => (
						<motion.article
							key={article.id}
							variants={itemVariants}
							whileHover={{ y: -5 }}
							className="bg-white rounded-xl shadow-lg overflow-hidden"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={article.image}
									alt={article.title}
									className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
									{article.category}
								</div>
							</div>
							<div className="p-6">
								<div className="text-sm text-gray-500 mb-2">{article.date}</div>
								<h2 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h2>
								<p className="text-gray-600 mb-4">{article.content}</p>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => handleReadMore(article.id)}
									className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
								>
									Read More →
								</motion.button>
							</div>
						</motion.article>
					))}
				</motion.div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex justify-center mt-12 space-x-2">
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
							<motion.button
								key={number}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={() => handlePageChange(number)}
								className={`px-4 py-2 rounded-lg ${
									currentPage === number
										? "bg-blue-600 text-white"
										: "bg-white text-gray-700 hover:bg-gray-100"
								}`}
							>
								{number}
							</motion.button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Blog;
