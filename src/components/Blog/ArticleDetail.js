import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleById } from '../../data/articles';

const ArticleDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const article = getArticleById(id);

    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                    >
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/blog')}
                            className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            ← Back to Blog
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gray-50 py-12"
        >
            <div className="container mx-auto px-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/blog')}
                    className="mb-8 text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                >
                    ← Back to Blog
                </motion.button>

                <motion.article
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                    <div className="relative h-96 overflow-hidden">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                            {article.category}
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="text-sm text-gray-500 mb-4">{article.date}</div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">{article.title}</h1>
                        <div className="prose max-w-none whitespace-pre-line">
                            {article.fullContent}
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={article.authorImage}
                                        alt={article.author}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-800">{article.author}</div>
                                        <div className="text-sm text-gray-500">{article.authorRole}</div>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Share
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Bookmark
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.article>
            </div>
        </motion.div>
    );
};

export default ArticleDetail; 