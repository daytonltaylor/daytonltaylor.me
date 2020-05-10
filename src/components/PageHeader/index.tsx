import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function PageHeader() {
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarResponsive"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to="/about">About</Link>
							</li>
							<li className="nav-item">
								<Link to="/projects">Projects</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default PageHeader;
