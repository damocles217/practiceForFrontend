import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { User } from "../types/user";

export const submitForm = async ({
	e,
	user,
	setNavigate,
	setCookie,
}: {
	e: FormEvent<HTMLFormElement>;
	user: User | undefined;
	setNavigate: any;
	setCookie: any;
}): Promise<void> => {
	e.preventDefault();

	const data = await fetch("http://localhost:3000/user/login", {
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
	setupUser: Dispatch<SetStateAction<User | undefined | any>>,
	user: User | undefined
): void => {
	setupUser({ ...user, [e.target.name]: e.target.value });
};
