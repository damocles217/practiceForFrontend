import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { User, UserSignup } from "../types/user";
import { Post } from "../types/posts";

export const submitForm = async ({
	e,
	user,
	setNavigate,
	setCookie,
	url,
}: {
	e: FormEvent<HTMLFormElement>;
	user: User | UserSignup | undefined;
	setNavigate: any;
	setCookie: any;
	url: string;
}): Promise<void> => {
	e.preventDefault();

	const data = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Expose-Headers": "*",
		},
		body: JSON.stringify({
			...user,
		}),
	});

	const newData = await data.json();

	if (newData.cookies) {
		setCookie("user_a", newData.cookies.user_a, { path: "/", sameSite: true });
		setCookie("user_t", newData.cookies.user_t, { path: "/", sameSite: true });
		setNavigate("/admin");
	}
};

export const handleChange = (
	e: ChangeEvent<HTMLInputElement>,
	setupUser: Dispatch<SetStateAction<User | UserSignup | undefined | any>>,
	user: User | UserSignup | undefined
): void => {
	setupUser({ ...user, [e.target.name]: e.target.value });
};

export const handleChangePost = (
	e: ChangeEvent<HTMLInputElement>,
	setupPost: Dispatch<SetStateAction<Post | undefined | any>>,
	post: Post | undefined
): void => {
	setupPost({ ...post, [e.target.name]: e.target.value });
};

export const handleChangeTextArea = (
	e: ChangeEvent<HTMLTextAreaElement>,
	setupPost: Dispatch<SetStateAction<Post | undefined | any>>,
	post: Post | undefined
): void => {
	setupPost({ ...post, [e.target.name]: e.target.value });
};
