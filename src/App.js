import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Questions from "./components/IndividualTopics/React/ReactQuestions";
import Topics4 from "./components/ExamSubjects/Topics4";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			loader: async () => {
				return fetch("https://openapi.programming-hero.com/api/quiz");
			},
			element: <Home></Home>,
			children: [
				{
					path: "/topics",
					element: <Topics4></Topics4>,
				},
				// {
				// 	path: '/javaScript',
				// 	loader: async () => {
				// 		return fetch('')
				// 	}
				// 	element:
				// },
				// {
				// 	path: '/css',
				// 	loader: async () => {
				// 		return fetch('')
				// 	}
				// 	element:
				// },
				// {
				// 	path: '/git',
				// 	loader: async () => {
				// 		return fetch('')
				// 	}
				// 	element:
				// },
			],
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
	]);

	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
