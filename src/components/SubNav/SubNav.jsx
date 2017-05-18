import React from 'react';

import './SubNav.scss';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

const blurb = 'As the nation and Texas have grappled with questions about gender identity and bathroom access, the San Antonio Express-News spent the last year following transgender San Antonians, documenting their transitions and their fight for rights.';
const instructions = 'Rollover the images below for audio, click for full bio.';

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
        <Heading 
          align="center"
          tag="h3"
          margin="small"
        >
          {blurb}<br />{instructions}
        </Heading>
      </Box>
    </Box>
	);
};