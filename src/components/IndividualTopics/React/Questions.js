import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

const Question = ({ key, singlequestion }) => {
	const { options, id, question, correctAnswer } = singlequestion;
	console.log(correctAnswer);
	const ShowcorrectAnswer = (correctAnswer) => {
		alert(`Correct Answer is : ${correctAnswer}`);
	};
	const AnswerCheck = (e) => {
		console.log(correctAnswer);
		console.log(e.target.innerText);
		const TrickAnswer = e.target.innerText;
		if (TrickAnswer === correctAnswer) {
			alert("Answer is correct");
		} 
	};

	return (
		<div className="position-relative border m-3 p-3 rounded-xl shadow-lg bg-orange-50 ">
			<div></div>
			<div
				onClick={() => ShowcorrectAnswer(correctAnswer)}
				data-tooltip-target="tooltip-default"
				className=" btn-sm cursor-pointer position-absolute rounded-circle border border-red-400 border-4 bg-blue-100 top-0 left-0 ">
				{" "}
				<EyeIcon className="h-6 w-6 text-blue-500" />
			</div>

			<div></div>

			<div>
				<p>{question}</p>
				<div>
					{options.map((singleoption) => (
						<ol>
							<li
								onClick={AnswerCheck}
								className="btn  w-full btn-outline-info list-group-numbered  ">
								{singleoption}
							</li>
						</ol>
					))}
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Question;

{
	/* <button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 8px);">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
</div> */
}
