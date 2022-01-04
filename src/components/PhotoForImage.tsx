import React, { Fragment, useRef } from "react";
import { Post } from "../types/posts";

const PhotoForImage = ({
	photo,
	post,
	index,
}: {
	photo: string;
	post: Post;
	index: number;
}): JSX.Element => {
	const imageDelRef = useRef<any>();

	return (
		<Fragment>
			<div className="image-container">
				<img
					src={photo}
					ref={imageDelRef}
					onClick={(e) => {
						if (post.photos.length == 1) post.photos.length = 0;
						post.photos.splice(index, 1);
						imageDelRef.current.style = "width: 0;";
						console.log(post.photos);
					}}
				/>
			</div>
		</Fragment>
	);
};

export default PhotoForImage;
