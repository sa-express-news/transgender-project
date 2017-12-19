import React from 'react';

import './SlideshowButton.scss';

export default props => {
	const arrow = props.right ? '>' : '<';
	const className = `SlideshowButton-container ${props.right ? 'right' : 'left'}`;
	return (
		<div className={className}>
			<div className='SlideshowButton' onClick={props.onClick}>{arrow}</div>
		</div>
	);
}
