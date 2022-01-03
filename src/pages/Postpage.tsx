import React, { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../components/Preloader";
import RendImages from "../components/Rendimage";
import { Post } from "../types/posts";

const PostPage = (): JSX.Element => {
	const { id } = useParams();
	const [post, setPost] = useState<Post>();

	useEffect(() => {
		getPost();
	}, []);

	const getPost = async () => {
		const data = await fetch(`http://localhost:3000/post/getpost/${id}`, {
			method: "POST",
		});
		const newPost = await data.json();

		setPost(newPost);
	};

	if (post?.description == null) return <Preloader />;

	return (
		<Fragment>
			<div className="main-render">
				<div className="post-container">
					<h3 className="container-title">{post.title}</h3>
					<div className="content-post">
						<RendImages post={post} />
						<div className="content">
							<h3>{post.description}</h3>
							<p>{post.text}</p>
							<p>{post.owner}</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default PostPage;
