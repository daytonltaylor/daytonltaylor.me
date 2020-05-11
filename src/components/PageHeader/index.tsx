import React from 'react';
import './index.scss';

import { NavLink } from 'react-router-dom';

interface PageHeaderProps {}

const PageHeader: React.FC<PageHeaderProps> = () => {
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
								<NavLink className="bttn-nav" to="/about">
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default PageHeader;
