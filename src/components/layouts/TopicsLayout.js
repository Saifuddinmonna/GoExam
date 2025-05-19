import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavbarPage from '../NavbarPage/NavbarPage';
import Footer from '../Footer/Footer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const TopicsLayout = () => {
    const navigate = useNavigate();

    const topics = [
        {
            icon: <FaHtml5 />,
            title: "HTML",
            description: "Learn the structure of web pages using HTML.",
            link: "/topics/html"
        },
        {
            icon: <FaCss3Alt />,
            title: "CSS",
            description: "Style your web pages beautifully with CSS.",
            link: "/topics/css"
        },
        {
            icon: <FaJs />,
            title: "JavaScript",
            description: "Add interactivity to your websites using JavaScript.",
            link: "/topics/javascript"
        },
        {
            icon: <FaReact />,
            title: "React",
            description: "Build dynamic user interfaces using React.",
            link: "/topics/react"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <NavbarPage />
            <main className="flex-grow">
                {/* Topics Header Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
                    <div className="container mx-auto px-4 py-16">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Explore Programming Topics
                            </h1>
                            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
                                Dive into various programming concepts and test your knowledge with our interactive quizzes.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Topics Grid Section */}
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {topics.map((topic, index) => (
                                <motion.div
                                    key={topic.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onClick={() => navigate(topic.link)}
                                    className="cursor-pointer bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
                                >
                                    <div className="text-4xl text-indigo-600 mb-4">{topic.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic.title}</h3>
                                    <p className="text-gray-600">{topic.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
               
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default TopicsLayout;
