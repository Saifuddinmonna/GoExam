import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarPage from '../NavbarPage/NavbarPage';
import Footer from '../Footer/Footer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import topicsData from '../../data/topicsApi';

const TopicsLayout = () => {
    const navigate = useNavigate();
    const [clickedId, setClickedId] = useState(null);

    const getIcon = (iconName) => {
        switch(iconName) {
            case 'FaHtml5': return <FaHtml5 />;
            case 'FaCss3Alt': return <FaCss3Alt />;
            case 'FaJs': return <FaJs />;
            case 'FaReact': return <FaReact />;
            default: return null;
        }
    };

    const handleClick = (topicId) => {
        setClickedId(topicId);
        setTimeout(() => {
            setClickedId(null);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <NavbarPage />
            <main className="flex-grow">
                {/* Topics Header Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
                    <div className="container mx-auto px-4 py-16">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl font-bold text-white mb-6">
                                Explore Programming Topics
                            </h1>
                            <p className="text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed">
                                Dive into various programming concepts and test your knowledge with our interactive quizzes.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Topics Grid Section */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topicsData.data.map((topic, index) => (
                            <motion.div
                                key={topic.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    ...(clickedId === topic.id ? {
                                        rotate: 360,
                                        scale: [1, 1.1, 1],
                                    } : {})
                                }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ...(clickedId === topic.id ? { 
                                        rotate: { duration: 0.8, ease: "easeInOut" }
                                    } : {})
                                }}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-200"
                                onClick={() => handleClick(topic.id)}
                                whileHover={{ 
                                    scale: 1.05,
                                    rotate: 360,
                                    transition: {
                                        rotate: { duration: 0.8, ease: "easeInOut" }
                                    }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <img src={topic.logo} alt={topic.name} className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{topic.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-center mb-4">{topic.description}</p>
                                <div className="text-center text-indigo-600 font-medium">
                                    {topic.total} Quizzes
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
               
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default TopicsLayout;
