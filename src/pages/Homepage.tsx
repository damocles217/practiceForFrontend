import React, { Fragment, useEffect, useState } from "react";
import PostContainer from "../components/PostView";
import Preloader from "../components/Preloader";
import { Post } from "../types/posts";

const HomePage = (): JSX.Element => {
	const [num, setNumber] = useState<number>(0);
	const [posts, setPosts] = useState<Array<Post>>([]);

	useEffect(() => {
		getPosts();
	}, [num]);

	const getPosts = async () => {
		const data = await fetch("http://localhost:3000/post/getpost", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				num: num,
			}),
		});
		const newData = await data.json();
		setPosts([...posts, ...newData]);
	};

	if (posts == null) return <Preloader />;

	return (
		<Fragment>
			<div className="main-render">
				{posts.map((post, index) => {
					return <PostContainer key={index} post={post} />;
				})}
			</div>
		</Fragment>
	);
};

export default HomePage;
