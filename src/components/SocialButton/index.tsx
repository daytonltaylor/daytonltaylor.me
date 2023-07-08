import React, { useMemo } from 'react';
import './index.scss';

import { Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import RedirectIcon from '../../icons/RedirectIcon';

interface SocialButtonProps {
	icon: 'Email' | 'GitHub' | 'Twitter' | 'LinkedIn';
	to: string;
	openInNewTab?: boolean;
}

const mapStringToIcon = (iconStr: string): IconProp => {
	switch (iconStr) {
		case 'Email':
			return faEnvelope;
		case 'GitHub':
			return faGithub;
		case 'Twitter':
			return faTwitter;
		case 'LinkedIn':
			return faLinkedin;
	}
	return faLink;
};

const SocialButton: React.FC<SocialButtonProps> = (
	props: SocialButtonProps
) => {
	const icon: IconProp = useMemo(() => {
		return mapStringToIcon(props.icon);
	}, [props.icon]);

	return (
		<div className="social-bttn">
			<Button
				className="social-bttn-icon"
				href={props.to}
				target={props.openInNewTab ? '_blank' : '_self'}
				rel="noreferrer noopener"
			>
				<FontAwesomeIcon icon={icon} />
			</Button>
			<span className="title">
				<span className="title-text">{props.icon}</span>
				<RedirectIcon />
			</span>
		</div>
	);
};

SocialButton.defaultProps = {
	openInNewTab: false,
};

export default SocialButton;
