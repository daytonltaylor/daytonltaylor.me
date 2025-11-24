import React from 'react';
import './index.scss';

const NotFound: React.FC = () => {
	return (
		<div className="container error-container">
			<div className="error">The requested page could not be found.</div>
		</div>
	);
};

export default NotFound;
