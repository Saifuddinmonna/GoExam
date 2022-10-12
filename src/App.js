import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import ReactQuestions from "./components/IndividualTopics/React/ReactQuestions";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home></Home>,
			children: [
				{
					path: "/react",
					loader: async () => {
						return fetch(
							"https://openapi.programming-hero.com/api/quiz/1",
						);
					},
					element: <ReactQuestions></ReactQuestions>,
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
	]);

	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
