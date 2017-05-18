import React from 'react';

import './NavBar.scss';

import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import SocialShare from 'grommet/components/SocialShare';
import SocialReddit from 'grommet/components/icons/base/SocialReddit';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Share from 'grommet/components/icons/base/Share';


import ENLogo from './ENLogo';

const buildLogoPath = () => {
  return require('../../images/logo.png');
};

const setImgSize = props => props.isSmallScreen ? 'medium' : 'large';

const buildSocialButton = (href, icon) => {
  const target = '_blank';
  return (
    <Anchor href={href} icon={icon} target={target} />
  );
};

const buildAllSocialButtons = () => (
  <div>
    {buildSocialButton(
      'http://www.expressnews.com/',
      (<ENLogo className="en-logo" />)
    )}
    <SocialShare type='twitter' link='https://grommet.io' />
    <SocialShare type='facebook' link='https://grommet.io' />
    {buildSocialButton(
      '//www.reddit.com/submit?url=http://www.expressnews.com/transgender-life-in-transition/',
      (<SocialReddit />)
    )}
  </div>
);

const buildDesktopSocial = () => (
  <Box
    flex={true}
    justify="end"
    align="start"
    direction="row"
    pad={{
      horizontal: 'small'
    }}
    basis="1/2"
  >
    {buildAllSocialButtons()}
  </Box>
);

const buildMobileSocial = () => (
  <Box
    flex={true}
    responsive={false}
    justify="end"
    align="start"
    direction="row"
    basis="1/4"
    pad={{
      horizontal: 'small'
    }}
    className="share-btn-wrap"
  >
    <Menu 
      icon={<Share className="share-btn" />}
      dropAlign={{"right": "right", "top": "top"}}
      colorIndex="grey-1"
      size="small"
    >
      {buildAllSocialButtons()}
    </Menu>
  </Box>
);

export default props => {
  return (
    <Header 
      fixed={false}
      float={false}
      splash={false}
      size="small"
      colorIndex="transparent"
      className="NavBar"
    >
      <Box 
        flex={true}
        responsive={false}
        fill="horizontal"
        justify="start"
        direction="row"
      >
        <Box
          flex={true}
          justify="start"
          pad={{
            horizontal: 'small'
          }}
          basis="xxlarge"
        >
          <Image
            src={buildLogoPath()}
            size={setImgSize(props)}
          />
        </Box>
        { props.isSmallScreen && buildMobileSocial() }
        { !props.isSmallScreen && buildDesktopSocial() }
      </Box>
    </Header>
  );
};
