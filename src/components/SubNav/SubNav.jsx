import React from 'react';
import _ from 'lodash';

import './SubNav.scss';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

const addTitle = title => (
  <Heading align="center" tag="h2" margin="none">{title}</Heading>
);

export default props => {
	return (
		<Box
      colorIndex="grey-1"
      direction="row"
      justify="center"
    >
      <Box
        basis="3/4"
        pad="none"
        className="infobox"
      >
        {props.title && addTitle(props.title)}
        <Heading 
          align="center"
          tag="h3"
          margin="small"
        >
          {_.map(props.copy, (paragraph, idx) => (
            <span key={idx}>{paragraph}<br /></span>
          ))}
        </Heading>
      </Box>
    </Box>
	);
};