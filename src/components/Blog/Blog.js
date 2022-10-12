import React from 'react';

const Blog = () => {
        return (
			<div className="container">
				<h2>This is Munna Blog</h2>
				<div className="m position-relative">
					<img
						className="image-controlar h-40 w-100 object-cover border shadow-sm rounded-md "
						src="https://unsplash.com/photos/MPKQiDpMyqU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTl8fGNvZGluZyUyMHdhbGxwYXBlcnxlbnwwfHx8fDE2NjU1NjkxMjk&force=true"
						alt=""
					/>
					<div className="position-absolute top-24 left-52">
						<p>Come with Us To Learn</p>
					</div>

					<div className="fs-3 p-2 m-3">
						What's the purpose of using React.js?
					</div>
					<div>
						Imagine you are building a commenting widget for Quora.
						You would split it up to components like Toolbar,
						TextArea, toolbar tools (I won't iterate these),
						SocialWidget, Submit and so on. You would also set up
						some logic in place. React allows you to do exactly just
						this. It is a component oriented abstraction and it
						solves the view portion of frontend web development. It
						is possible to use it in other domains as well (mobile
						and so on) although DOM is the most popular target at
						the moment. It is not tied to DOM by design, though, so
						on abstract level it's just a component abstraction.
					</div>
				</div>

				<div className="fs-3 p-2 m-3">How React Context API Works?</div>
				<div>
					React Context provides a way to pass data through the
					component tree without having to pass props down manually at
					every level. In some sense, it simulates “Global” data in
					React component Tree. We have been waiting for this…from
					very very long. An experienced React developer might say,
					that we have context APIs from long. In fact, it is
					available from the very first version of React. but that is
					an experimental version of API, something, very clearly
					warned by React online docs, can break your application.
					However, finally, we have good news….React 16 context APIs
					are public and good for any application.
				</div>
				<div className="fs-3 p-2 m-3">What is the useRef hook?</div>
				<div>
					The useRef is a hook that allows to directly create a
					reference to the DOM element in the functional component.
					Syntax: const refContainer = useRef(initialValue); The
					useRef returns a mutable ref object.Oc
					<p>
						he useRef is a hook that allows to directly create a
						reference to the DOM element in the functional
						component. Syntax: const refContainer =
						useRef(initialValue); The useRef returns a mutable ref
						object.Oc
					</p>
				</div>
			</div>
		);
};

export default Blog;
