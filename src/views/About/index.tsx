import React, { useEffect, useState } from 'react';
import './index.scss';

import SocialButton from '../../components/SocialButton';

interface AboutProps {}

interface OpenDocumentOptions {
	newTab: boolean;
}

const About: React.FC<AboutProps> = () => {
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
};

export default About;
