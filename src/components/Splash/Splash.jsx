import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';

import './Splash.scss';

const Splash = props => {
  return (
    <Article 
      scrollStep={true}
      direction="row"
      controls={true}
      className="splash"
    >
      {_.map(props.stories, (story, key) => (
        <Section 
          pad="none"
          justify="center"
          align="center"
          colorIndex="grey-2"
          full={'horizontal'}
          className="slide"
        >
          <Hero 
            background={
              <Image 
                src={story.bgImg}
                fit='cover'
                full={true} 
              />
            }
            backgroundColorIndex='dark'
            size='large'
          />
        </Section>
      ))}
    </Article>
  );
};

Splash.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Splash;