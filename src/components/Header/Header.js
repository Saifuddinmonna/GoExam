import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ExamSubjects from "../ExamSubjects/ExamSubjects";
import Topics4 from "../ExamSubjects/Topics4";
import Statistics from "../Statistics/Statistics";
import Statisticstable from "../Statistics/Statisticstable";

import "./Header.css";

const Header = () => {
	const navigate = useNavigate();
	const Navigating = () => {
		navigate("/topics");
	};
	return (
		<div className="min-widthheader">
			<div>
				<div className="m-1 shadow-md border border-r-2   border-rose-100 position-relative min-widthheader ">
					<img
						className="image-controlar max-h-72 w-100 object-cover border shadow-sm rounded-md "
						src="https://unsplash.com/photos/MPKQiDpMyqU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTl8fGNvZGluZyUyMHdhbGxwYXBlcnxlbnwwfHx8fDE2NjU1NjkxMjk&force=true"
						alt=""
					/>
					<div className="position-absolute top-left fs-3">
						<p className="text-white fs-1 ">
							Come with Us To Learn Code
						</p>
					</div>
				</div>
				<div className="image"></div>
				{/* <div
					onClick={() => Navigating()}
					className=" btn btn-outline-warning-light  w-full border m-2 p-3 rounded-lg shadow-md">
					<div
						onClick={() => Navigating()}
						className="  btn-outline-primary w-full border m-2 p-3 shadow-md rounded-full bg-red-50">
						Topics For Practice
					</div>
					<div
						onClick={() => Navigating()}
						className=" btn btn-outline-primary w-full border m-2 p-3 shadow-md rounded-lg bg-slate-500">
						React
					</div>
					<div
						onClick={() => Navigating()}
						className=" btn btn-outline-success w-full border m-2 p-3 rounded-lg shadow-md">
						{" "}
						JavaScript{" "}
					</div>
					<div
						onClick={() => Navigating()}
						className=" btn btn-outline-primary w-full border m-2 p-3 rounded-lg shadow-md">
						CSS{" "}
					</div>
					<div
						onClick={() => Navigating()}
						className=" btn btn-outline-primary w-full border m-2 p-3 rounded-lg shadow-md">
						{" "}
						Git
					</div>
				</div> */}
			</div>

			<Outlet></Outlet>
		</div>
	);
};

export default Header;
