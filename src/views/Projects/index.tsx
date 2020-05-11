import React, { useEffect } from 'react';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
	useEffect(() => {
		document.title = 'Dayton Taylor | Projects';
	});

	return <div></div>;
};

export default Projects;
