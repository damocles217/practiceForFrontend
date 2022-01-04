import { FormEvent } from "react";
import { Post } from "../types/posts";

export const sendPost = async (
	e: FormEvent<HTMLFormElement>,
	post: Post,
	setNavigate: any,
	cookies: any
): Promise<void> => {
	e.preventDefault();

	console.log(post);
	const data = await fetch("http://localhost:3000/post/update", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": "*",

			cookies: JSON.stringify({
				user_t: cookies.user_t,
				user_a: cookies.user_a,
			}),
		},
		body: JSON.stringify({
			...post,
		}),
	});

	console.log(await data.json());

	setNavigate("/");
};
