import React from 'react';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

interface SocialButtonProps {
	href: string;
	icon: 'envelope' | 'github' | 'twitter' | 'linkedin';
	target?: '_self' | '_blank';
}

const mapStringToIcon = (iconStr: string): IconProp => {
	switch (iconStr) {
		case 'envelope':
			return faEnvelope;
		case 'github':
			return faGithub;
		case 'twitter':
			return faTwitter;
		case 'linkedin':
			return faLinkedin;
	}
	return faLink;
};

const SocialButton: React.FC<SocialButtonProps> = (
	props: SocialButtonProps
) => {
	return (
		<a
			className="bttn-social"
			href={props.href}
			target={props.target}
			rel="noreferrer noopener"
		>
			<FontAwesomeIcon icon={mapStringToIcon(props.icon)} />
		</a>
	);
};

SocialButton.defaultProps = {
	target: '_self',
};

export default SocialButton;
