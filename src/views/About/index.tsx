import React, { useEffect, useState } from 'react';
import './index.scss';
import DLTProfileImage from '../../images/dltprofile.jpg';

interface OpenDocumentOptions {
	newTab: boolean;
}

function About() {
	const requireNewTab = window.isMobileView || window.isTabletView;

	const [showDocumentSection, setShowDocumentSection] = useState<boolean>(
		false
	);
	const [pageDocument, setPageDocument] = useState<{
		url: string;
		type: string;
	}>({ url: '/documents/Resume.pdf', type: 'application/pdf' });

	const openDocument = (
		url: string,
		type: string,
		options: OpenDocumentOptions = { newTab: false }
	): void => {
		if ((options && options.newTab) || requireNewTab) {
			setShowDocumentSection(false);
			window.open(url);
		} else {
			setPageDocument({ url, type });
			setShowDocumentSection(true);
		}
	};

	const openPdf = (
		url: string,
		options: OpenDocumentOptions = { newTab: false }
	): void => openDocument(url, 'application/pdf', options);

	useEffect(() => {
		document.title = 'Dayton Taylor | About';
	});

	return (
		<div id="about-me" className="container">
			<div className="row">
				<div className="col-md-5">
					<img
						className="img-fluid rounded-circle profile-img"
						src={DLTProfileImage}
						alt="dlt-profile"
					/>
				</div>
				<div className="col-md-7 profile-info">
					<h1>Dayton Taylor</h1>
					<p>Full-Stack Web Developer</p>
					<div id="contacts" className="row">
						<div className="col-lg-1"></div>
						<div className="col">
							<a
								className="bttn-social"
								href="mailto:daytonltaylor@outlook.com"
							>
								<i className="fa fa-envelope"></i>
							</a>
						</div>
						<div className="col">
							<a
								className="bttn-social"
								target="_blank"
								rel="noreferrer noopener"
								href="https://github.com/daytonltaylor"
							>
								<i className="fa fa-github"></i>
							</a>
						</div>
						<div className="col">
							<a
								className="bttn-social"
								target="_blank"
								rel="noreferrer noopener"
								href="https://twitter.com/DaytonLTaylor"
							>
								<i className="fa fa-twitter"></i>
							</a>
						</div>
						<div className="col">
							<a
								className="bttn-social"
								target="_blank"
								rel="noreferrer noopener"
								href="https://www.linkedin.com/in/daytonltaylor/"
							>
								<i className="fa fa-linkedin-square"></i>
							</a>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</div>
			<div className="spacer"></div>
			<div className="documents-container container">
				<div className="document-links row">
					<div className="col">
						<button
							name="toggleResume"
							className="bttn"
							disabled={
								showDocumentSection &&
								pageDocument.url === '/documents/Resume.pdf'
							}
							onClick={() => openPdf('/documents/Resume.pdf')}
						>
							Résumé
						</button>
					</div>
				</div>
				<div className="document-view">
					<embed
						className={showDocumentSection ? 'show' : 'hide'}
						src={pageDocument.url}
						type={pageDocument.type}
						width="100%"
						height="500px"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
