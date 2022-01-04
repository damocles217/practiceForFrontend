import React, { Fragment, useEffect, useState } from "react";
import { Post } from "../types/posts";
import Preloader from "../components/Preloader";
import PostContainer from "../components/PostContainer";

const DashboardPage = (): JSX.Element => {
	const [posts, setPosts] = useState<Array<Post>>([]);
	const [num, setNum] = useState<number>(0);

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
				<div id="dashboard-page">
					{posts.map((post, index) => {
						return <PostContainer key={index} posting={post} />;
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default DashboardPage;
