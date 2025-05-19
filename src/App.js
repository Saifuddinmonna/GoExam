import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Questions from "./components/IndividualTopics/React/ReactQuestions";
import Topics4 from "./components/ExamSubjects/Topics4";
import Blog from "./components/Blog/Blog";
import ArticleDetail from "./components/Blog/ArticleDetail";
import ExamSubjects from "./components/ExamSubjects/ExamSubjects";
import Header from "./components/Header/Header";
import Erroralert from "./components/Erroralert/Erroralert";
import Statistics from "./components/Statistics/Statistics";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",

			element: <Home></Home>,
			children: [
				{
					path: "/",
					element: <Header></Header>,
					children: [
						{
							path: "/",
							loader: async () => {
								return fetch(
									"https://openapi.programming-hero.com/api/quiz",
								);
							},
							element: <ExamSubjects></ExamSubjects>,
						},
					],
				},

				{
					path: "/topics",
					loader: async () => {
						return fetch(
							"https://openapi.programming-hero.com/api/quiz",
						);
					},
					element: <ExamSubjects></ExamSubjects>,
				},

				{
					path: "/blog",

					element: <Blog></Blog>,
				},

				{
					path: "/blog/:id",
					element: <ArticleDetail></ArticleDetail>,
				},

				{
					path: "/questions/:id",
					loader: ({ params }) => {
						console.log(params);
						return fetch(
							`https://openapi.programming-hero.com/api/quiz/${params.id}`,
						);
					},
					element: <Questions></Questions>,
				},
				{
					path: "/",
					loader: ({ params }) => {
						console.log(params);
						return fetch(
							`https://openapi.programming-hero.com/api/quiz/${params.id}`,
						);
					},
					element: <Questions></Questions>,
				},

				{
					path: "/statistics",
					loader: async () => {
						return fetch(
							"https://openapi.programming-hero.com/api/quiz",
						);
					},
					element: <Statistics></Statistics>,
				},
				{
					path: "*",
					element: <Erroralert></Erroralert>,
				},
			],
		},
		// {
		// 	path: "*",
		// 	element: <Erroralert></Erroralert>,
		// },
	]);

	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
