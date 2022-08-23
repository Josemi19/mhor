import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid d-flex justify-content-center">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">Mhor Design</span>
					</Link>
				</div>
			</nav>
		</>
	);
};
