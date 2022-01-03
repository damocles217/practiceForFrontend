import React, { useRef } from "react";
import { Post } from "../types/posts";

const RendImages = ({ post }: { post: Post }): JSX.Element => {
	const imageRef = useRef<any>();

	const handleClick = async (e: React.MouseEvent, photo: string) => {
		e.preventDefault();
		imageRef.current.src = photo;
	};

	return (
		<div className="images">
			<div className="image-container-2">
				<img src={post.photos[0]} ref={imageRef} />
			</div>
			<div className="images-content">
				{post &&
					post.photos.map((photo, index) => {
						if (photo == null) return null;
						return (
							<div className="image-array" key={index}>
								<img src={photo} onClick={(e) => handleClick(e, photo)}></img>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default RendImages;
