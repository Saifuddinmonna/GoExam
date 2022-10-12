import React from "react";
import ExamSubjects from "../ExamSubjects/ExamSubjects";
import NavbarPage from "../NavbarPage/NavbarPage";

const Home = () => {
	return (
		<div>
			
			<NavbarPage></NavbarPage>
			<div className="m">
				<img
				        	className="image-controlar h-40 w-100 object-cover border shadow-sm rounded-md "
					src="https://unsplash.com/photos/MPKQiDpMyqU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTl8fGNvZGluZyUyMHdhbGxwYXBlcnxlbnwwfHx8fDE2NjU1NjkxMjk&force=true"
					alt=""
				/>
                        </div>
                        <ExamSubjects > </ExamSubjects>
		</div>
	);
};

export default Home;
