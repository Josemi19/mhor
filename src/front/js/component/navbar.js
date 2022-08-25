import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-md navbar-light nbar">
				<div className="container-fluid">
					<div>
						<Link to="/" className="navbar-brand nombre-marca">
							Mhor Design
						</Link>
					</div>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/about">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/order">Place Order</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
