import React, { useEffect } from 'react';
import './index.scss';

import SocialButton from '../../components/SocialButton';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	useEffect(() => {
		document.title = 'Dayton Taylor | About';
	}, []);

	return (
		<div id="about-me" className="container">
			<div className="row">
				<div className="col-md-5">
					<img
						className="img-fluid rounded-circle profile-img"
						src="/images/profile_dlt.jpg"
						alt="profile-dlt"
					/>
				</div>
				<div className="col-md-7 profile-info">
					<h1>Dayton Taylor</h1>
					<p>Software Engineer</p>
					<div id="contacts" className="row">
						<div className="col-lg-1"></div>
						<div className="col">
							<SocialButton
								icon="envelope"
								href="mailto:daytonltaylor@outlook.com"
							/>
						</div>
						<div className="col">
							<SocialButton
								href="https://github.com/daytonltaylor"
								icon="github"
								target="_blank"
							/>
						</div>
						<div className="col">
							<SocialButton
								href="https://twitter.com/DaytonLTaylor"
								icon="twitter"
								target="_blank"
							/>
						</div>
						<div className="col">
							<SocialButton
								href="https://www.linkedin.com/in/daytonltaylor/"
								icon="linkedin"
								target="_blank"
							/>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
