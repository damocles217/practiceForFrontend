import React, { Fragment, FormEvent, ChangeEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { handleChange, submitForm } from "../hooks/form";
import { UserSignup } from "../types/user";

const SignupPage = (): JSX.Element => {
	const [user, setUser] = useState<UserSignup>();
	const [cookies, setCookie] = useCookies();
	const setNavigate = useNavigate();
	const url = "http://localhost:3000/user";

	return (
		<Fragment>
			<div className="main-render">
				<div className="form-fill">
					<form
						className="form-register"
						id="login-form"
						onSubmit={(e: FormEvent<HTMLFormElement>) => {
							submitForm({ e, user, setNavigate, setCookie, url });
						}}
					>
						<label>Registrate</label>

						<input
							type="text"
							name="name"
							placeholder="Nombre"
							className="login-input"
							value={user?.name}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								handleChange(e, setUser, user);
							}}
						/>

						<input
							type="text"
							name="lastname"
							placeholder="Apellidos"
							className="login-input"
							value={user?.lastname}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								handleChange(e, setUser, user);
							}}
						/>

						<input
							type="email"
							name="email"
							placeholder="Email"
							className="login-input"
							value={user?.email}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								handleChange(e, setUser, user);
							}}
						/>

						<input
							type="password"
							name="password"
							placeholder="Email"
							className="login-input"
							value={user?.password}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								handleChange(e, setUser, user);
							}}
						/>
						<button type="submit">Enviar</button>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default SignupPage;
