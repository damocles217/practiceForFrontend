import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { handleChange, submitForm } from "../hooks/form";
import { User } from "../types/user";

const LoginPage = (): JSX.Element => {
	const [user, setUser] = useState<User>();
	const [cookies, setCookie] = useCookies();
	const setNavigate = useNavigate();
	const url = "http://localhost:3000/user/login";

	return (
		<Fragment>
			<div className="main-render">
				<div className="form-fill">
					<form
						className="form-register"
						id="login-form"
						onSubmit={(e: FormEvent<HTMLFormElement>) => {
							submitForm({
								e,
								user,
								setNavigate,
								setCookie,
								url,
							});
						}}
					>
						<label>Iniciar sesion</label>
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
							placeholder="Contraseña"
							className="login-input"
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								handleChange(e, setUser, user);
							}}
							value={user?.password}
							name="password"
						/>
						<button type="submit">Enviar</button>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default LoginPage;
