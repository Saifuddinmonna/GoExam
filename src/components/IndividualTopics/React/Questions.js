import React from 'react';

const Question = ({key,singlequestion}) => {
        const { options, id, question, correctAnswer } = singlequestion;
       
        return (
			<div className="border m-3 p-3">
				<div>
                                <p>{ question }</p>
                                <div>
                                       
                                                
                                        {
                                                options.map((singleoption) => (
                                                        <ol>
                                                                <li className='btn  w-full btn-outline-info list-group-numbered  '>
                                                                        {singleoption}
                                                                </li>
                                                        </ol>
                                                ))
                                      }                  

                                </div>
                                
				</div>
				<div></div>
			</div>
		);
};

export default Question ;