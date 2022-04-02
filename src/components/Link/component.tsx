import React from 'react';
import { Text } from '@components';
import * as Types from './types';

// STYLE
import './style.scss';

const Link = (props: Types.Props): JSX.Element => {
	const { id, label, href, size } = props;
	function handleClick(): void {
		window.open(href, '_blank');
	}

	return (
		// ! turn component into a <a></a> tag.
		<span id={id} data-testid={id} className="Link" onClick={() => handleClick()}>
			<Text id={`${id}-link-label`} content={label} size={size} />
		</span>
	);
};

export default Link;
