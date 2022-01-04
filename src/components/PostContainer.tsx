import React, { Fragment, useState } from "react";
import { handleChangePost, handleChangeTextArea } from "../hooks/form";
import { useNavigate } from "react-router-dom";
import { Post } from "../types/posts";
import { sendPost } from "../hooks/sendPost";
import { useCookies } from "react-cookie";
import PhotoForImage from "./PhotoForImage";

const PostContainer = ({ posting }: { posting: Post }): JSX.Element => {
	const [post, setPost] = useState<Post>(posting);

	const [imageBase64] = useState<string>();
	const [imageFile, setImageFile] = useState<Record<string, any>>();

	const [cookies] = useCookies();

	const setNavigate = useNavigate();

	const handleChangeImage = (e) => {
		setImageFile(imageFile);
		encodeBase64(e.target.files[0]);
	};

	async function encodeBase64(file: any) {
		const reader = new FileReader();

		if (file) {
			reader.readAsDataURL(file);
			reader.onload = async () => {
				const base64 = reader.result;
				if (base64 != null) {
					if (typeof base64 === "string") {
						setPost({ ...post, photos: [...post.photos, base64] });
					}
				}
			};
		}
	}

	return (
		<Fragment>
			<div className="posting-container">
				<form
					onSubmit={(e) => {
						sendPost(e, post, setNavigate, cookies);
					}}
				>
					<label htmlFor="title">Titulo:</label>
					<input
						type="text"
						value={post.title}
						placeholder="Titulo"
						onChange={(e) => handleChangePost(e, setPost, post)}
						name="title"
					/>

					<label htmlFor="description">Descripcion:</label>
					<input
						type="text"
						value={post.description}
						placeholder="Descripcion"
						onChange={(e) => handleChangePost(e, setPost, post)}
						name="description"
					/>

					<label htmlFor="text">Texto:</label>
					<textarea
						value={post.text}
						placeholder="Texto"
						onChange={(e) => handleChangeTextArea(e, setPost, post)}
						name="text"
					/>

					{post.photos.map((photo, index) => {
						return (
							<PhotoForImage
								post={post}
								photo={photo}
								index={index}
								key={index}
							/>
						);
					})}
					{imageBase64 && (
						<div className="image-container-2">
							<img src={imageBase64} />
						</div>
					)}

					<input
						type="file"
						accept="image/*"
						name="photo"
						id="upload-image"
						value={imageFile?.name}
						onChange={handleChangeImage}
					/>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</Fragment>
	);
};

export default PostContainer;
