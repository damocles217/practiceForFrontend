import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Post } from "../types/posts";

const PostContainer = ({ post }: { post: Post }): JSX.Element => {
	return (
		<Fragment>
			<div className="post-grill">
				<h3 className="post-title">{post.title}</h3>
				<div id="post-content">
					<div className="image-container">
						<img src={post.photos[0]} />
					</div>
					<h4 className="post-description">
						{post.description}
						<br />
						<Link className="link-to" to={`/post/${post._id}`}>
							Ver mas
						</Link>
					</h4>
				</div>
			</div>
		</Fragment>
	);
};

export default PostContainer;
