import React, { useMemo } from 'react';
import './index.scss';

import { Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import RedirectIcon from '../../icons/RedirectIcon';

export type SocialButtonIcon = 'Email' | 'GitHub' | 'Twitter' | 'LinkedIn';

interface SocialButtonProps {
	icon: SocialButtonIcon;
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
	{ icon, to, openInNewTab = false }: SocialButtonProps
) => {
	const iconProp: IconProp = useMemo(() => {
		return mapStringToIcon(icon);
	}, [icon]);

	return (
		<div className="social-bttn">
			<Button
				className="social-bttn-icon"
				href={to}
				target={openInNewTab ? '_blank' : '_self'}
				rel="noreferrer noopener"
			>
				<FontAwesomeIcon icon={iconProp} />
			</Button>
			<span className="title">
				<span className="title-text">{icon}</span>
				<RedirectIcon />
			</span>
		</div>
	);
};

export default SocialButton;
