import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Questions from "./components/IndividualTopics/React/ReactQuestions";
import Blog from "./components/Blog/Blog";
import ArticleDetail from "./components/Blog/ArticleDetail";
import ExamSubjects from "./components/ExamSubjects/ExamSubjects";

import Erroralert from "./components/Erroralert/Erroralert";
import Statistics from "./components/Statistics/Statistics";
import HomeLayout from "./components/layouts/HomeLayout";
import TopicsLayout from "./components/layouts/TopicsLayout";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomeLayout />,
			children: [
				// {
				// 	path: "/",
				// 	loader: async () => {
				// 		return fetch(
				// 			"https://openapi.programming-hero.com/api/quiz",
				// 		);
				// 	},
				// 	element: <ExamSubjects />,
				// },
				{
					path: "/blog",
					element: <Blog />,
				},
				{
					path: "/",
					element: <Home/>,
				},
				{
					path: "/blog/:id",
					element: <ArticleDetail />,
				},
				{
					path: "/statistics",
					loader: async () => {
						return fetch(
							"https://openapi.programming-hero.com/api/quiz",
						);
					},
					element: <Statistics />,
				},
			],
		},
		{
			path: "/topics",
			element: <TopicsLayout />,
			children: [
				{
					path: "/topics",
					loader: async () => {
						return fetch(
							"https://openapi.programming-hero.com/api/quiz",
						);
					},
					element: <ExamSubjects />,
				},
				{
					path: "/topics/:id",
					loader: ({ params }) => {
						return fetch(
							`https://openapi.programming-hero.com/api/quiz/${params.id}`,
						);
					},
					element: <Questions />,
				},
			],
		},
		{
			path: "*",
			element: <Erroralert />,
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
