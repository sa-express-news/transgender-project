import React      from 'react';
import PropTypes  from 'prop-types';

import Section from 'grommet/components/Section';
import Video from 'grommet/components/Video';

import SlideshowButton from '../SlideshowButton/SlideshowButton';

const vidSrc = require('../../videos/overview.mp4');
const poster = require('../../images/video-poster.jpg');

const VideoSlide = props => (
	<div className="Video">
		<Section 
			pad="none"
			justify="center"
			align="center"
			colorIndex="grey-1"
			full="horizontal"
			className="slide"
			key='video'
		>
			<Video 
				full={true}
				fit="contain"
				poster={poster}
			>
				<source 
					src={vidSrc}
					type="video/mp4"
				/>
			</Video>
		</Section>
		<SlideshowButton right={false} onClick={props.moveBackward} />
	    <SlideshowButton right={true} onClick={props.moveForward} />
    </div>
);

VideoSlide.propTypes = {
  moveForward: PropTypes.func.isRequired,
  moveBackward: PropTypes.func.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
};

export default VideoSlide;