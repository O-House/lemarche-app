import React from 'react';
import classnames from 'classnames';
import * as Types from './types';

import './style.scss';

const Text = (props: Types.Props): JSX.Element => {
	const { id, content, size, italic, bold } = props;
	return (
		<p
			id={id}
			data-testid={id}
			className={classnames('Text', {
				'Text--small': size === 'sm',
				'Text--medium': !size || size === 'md',
				'Text--large': size === 'lg',
				'Text--bold': bold,
				'Text--italic': italic,
			})}
		>
			{content}
		</p>
	);
};

export default Text;
