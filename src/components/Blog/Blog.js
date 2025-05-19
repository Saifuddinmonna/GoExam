import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
	const articles = [
		{
			id: 1,
			title: "Understanding React.js: A Comprehensive Guide",
			image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
			content: "React.js is a powerful JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently. With its virtual DOM and component-based architecture, React makes it easier to build complex applications while maintaining good performance.",
			date: "March 15, 2024",
			category: "React"
		},
		{
			id: 2,
			title: "Mastering React Context API",
			image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
			content: "The React Context API provides a way to share data between components without prop drilling. It's perfect for managing global state, themes, and user authentication. Learn how to implement and use Context API effectively in your React applications.",
			date: "March 14, 2024",
			category: "React"
		},
		{
			id: 3,
			title: "Understanding useRef Hook in React",
			image: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg",
			content: "The useRef hook is a powerful tool in React that allows you to create mutable references that persist across renders. It's commonly used for accessing DOM elements, storing previous values, and managing focus, text selection, or media playback.",
			date: "March 13, 2024",
			category: "React Hooks"
		},
		{
			id: 4,
			title: "State Management in React Applications",
			image: "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-1350.jpg",
			content: "Effective state management is crucial for building scalable React applications. Learn about different state management solutions, from local state to global state management libraries like Redux and Zustand.",
			date: "March 12, 2024",
			category: "State Management"
		},
		{
			id: 5,
			title: "React Performance Optimization Techniques",
			image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
			content: "Discover various techniques to optimize your React application's performance. From code splitting and lazy loading to memoization and virtualization, learn how to make your React apps faster and more efficient.",
			date: "March 11, 2024",
			category: "Performance"
		},
		{
			id: 6,
			title: "Building Responsive UIs with React",
			image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
			content: "Learn how to create responsive and mobile-friendly user interfaces using React. Explore different approaches to responsive design, from CSS media queries to responsive components and layouts.",
			date: "March 10, 2024",
			category: "UI/UX"
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
					{articles.map((article) => (
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
									className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
								>
									Read More →
								</motion.button>
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Blog;
