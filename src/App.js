import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Questions from "./components/IndividualTopics/React/ReactQuestions";
import Topics4 from "./components/ExamSubjects/Topics4";
import Blog from "./components/Blog/Blog";
import ExamSubjects from "./components/ExamSubjects/ExamSubjects";
import Header from "./components/Header/Header";
import Erroralert from "./components/Erroralert/Erroralert";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",

			element: <Home></Home>,
			children: [
				{
					path: "/",
					element: <Header></Header>,
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
					path: "*",
					element: <Erroralert></Erroralert>,
				},
			],
		},
		{
			path: "*",
			element: <Erroralert></Erroralert>,
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
