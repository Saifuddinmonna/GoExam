import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavbarPage from "../NavbarPage/NavbarPage";
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { FaRocket, FaGraduationCap, FaCode, FaUsers, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import './Home.css';

const Home = () => {
	const navigate = useNavigate();

	const features = [
		{
			icon: <FaRocket />,
			title: "Quick Start",
			description: "Begin your coding journey with our interactive quizzes and challenges"
		},
		{
			icon: <FaGraduationCap />,
			title: "Learn by Doing",
			description: "Practice with real-world coding problems and improve your skills"
		},
		{
			icon: <FaCode />,
			title: "Multiple Topics",
			description: "Explore various programming languages and technologies"
		},
		{
			icon: <FaUsers />,
			title: "Join Community",
			description: "Connect with other learners and share your progress"
		}
	];
	const topics = [
        {
            icon: <FaHtml5 />,
            title: "HTML",
            description: "Learn the structure of web pages using HTML.",
            link: "/topics/1"
        },
        {
            icon: <FaCss3Alt />,
            title: "CSS",
            description: "Style your web pages beautifully with CSS.",
            link: "/topics/2"
        },
        {
            icon: <FaJs />,
            title: "JavaScript",
            description: "Add interactivity to your websites using JavaScript.",
            link: "/topics/3"
        },
        {
            icon: <FaReact />,
            title: "React",
            description: "Build dynamic user interfaces using React.",
            link: "/topics/4"
        }
    ];

	return (
		<div className="page-container">
		
			<div className="content-wrapper">



				{/* Hero Section */}
				<div className="hero-section">
					<div className="container mx-auto px-4 py-20">
						<div className="flex flex-col md:flex-row items-center justify-between">
							<motion.div 
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								className="md:w-1/2 mb-8 md:mb-0"
							>
								<h1 className="text-5xl font-bold text-white mb-6">
									Join Our Learning Community
								</h1>
								<p className="text-xl text-slate-900 mb-8">
									Join thousands of learners who are improving their coding skills with our interactive quizzes and challenges.
								</p>
								<div className="flex gap-4">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => navigate('/topics')}
										className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
									>
										Get Started
									</motion.button>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => navigate('/blog')}
										className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
									>
										Learn More
									</motion.button>
								</div>
							</motion.div>
							<motion.div 
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								className="md:w-1/2"
							>
								<img 
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
									alt="Learning community"
									className="rounded-2xl shadow-2xl"
								/>
							</motion.div>
						</div>
					</div>
				</div>

//explore the out courses
     {/* Topics Header Section */}
	 <div className="bg-gradient-to-r from-purple-600 to-indigo-700">
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
                            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                                Dive into various programming concepts and test your knowledge with our interactive quizzes.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Topics Grid Section */}
                <div className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {topics.map((topic, index) => (
                                <motion.div
                                    key={topic.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onClick={() => navigate(topic.link)}
                                    className="cursor-pointer bg-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="text-4xl text-indigo-600 mb-4">{topic.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic.title}</h3>
                                    <p className="text-gray-600">{topic.description}</p>
									
                                </motion.div>
                            ))}
                        </div>
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-center mt-8"
						>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => navigate('/topics')}
								className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
							>
								View More Topics
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</motion.button>
						</motion.div>
                    </div>
                </div>

				{/* Features Section */}
				<div className="bg-white py-20">
					<div className="container mx-auto px-4">
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl font-bold text-gray-800 mb-4">Why Join Our Community?</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Our platform offers everything you need to master programming and advance your career
							</p>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{features.map((feature, index) => (
								<motion.div
									key={feature.title}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
								>
									<div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
									<p className="text-gray-600">{feature.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Stats Section */}
				<div className="bg-blue-600 text-white py-20">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
							>
								<h3 className="text-4xl font-bold mb-2">10K+</h3>
								<p className="text-blue-100">Active Learners</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<h3 className="text-4xl font-bold mb-2">50+</h3>
								<p className="text-blue-100">Topics Available</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<h3 className="text-4xl font-bold mb-2">95%</h3>
								<p className="text-blue-100">Success Rate</p>
							</motion.div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="bg-gray-50 py-20">
					<div className="container mx-auto px-4 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
							<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
								Join our community of learners and start improving your programming skills today
							</p>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => navigate('/topics')}
								className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Explore Topics
							</motion.button>
						</motion.div>
					</div>
				</div>

				<Outlet />
			</div>
		
		</div>
	);
};

export default Home;
