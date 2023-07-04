import React, { useMemo } from 'react';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Tooltip, Typography } from '@mui/material';

interface SocialButtonProps {
	href: string;
	icon: 'Email' | 'GitHub' | 'Twitter' | 'LinkedIn';
	target?: '_self' | '_blank';
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
		<Tooltip title={<Typography>{props.icon}</Typography>}>
			<a
				className="bttn-social"
				href={props.href}
				target={props.target}
				rel="noreferrer noopener"
			>
				<FontAwesomeIcon icon={icon} />
			</a>
		</Tooltip>
	);
};

SocialButton.defaultProps = {
	target: '_self',
};

export default SocialButton;
