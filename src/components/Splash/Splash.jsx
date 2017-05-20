import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Video from 'grommet/components/Video';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';

import Article from './Article';

import './Splash.scss';

const vidSrc = require('../../videos/overview.mp4');
const poster = require('../../images/video-poster.jpg');

const buildArticleUrl = slug => `http://projects.expressnews.com/${slug}`;

const buildArticleSection = (story, key) => (
  <Section 
    pad="none"
    justify="center"
    align="center"
    colorIndex="grey-1"
    full="horizontal"
    className="slide"
    key={key}
  >
    <Anchor
      href={buildArticleUrl(story.slug)}
      target="_blank"
    >
      <Hero 
        background={
          <Image 
            src={story.bgImg}
            fit="cover"
            full={true} 
          />
        }
        backgroundColorIndex="dark"
        size="large"
        flush={false}
      >
        <Box 
          direction="row"
          justify="start"
          align="end"
          className="text-wrap"
        >
          <Box
            basis="1/3"
            justify="start"
            align="start"
            pad={{
              horizontal: 'large',
              vertical: 'small'
            }}
            className="hero-text-wrap"
          >
            <Heading
              margin="none"
              align="start"
              pad={{
                horizontal: 'large'
              }}
              tag="h2"
              strong={true}
            >
              {story.title}
            </Heading>
            <Heading
              margin="none"
              align="start"
              tag="h3"
            >
              {story.excerpt}
            </Heading>
            <Box pad={{ vertical: 'large' }} />
          </Box>
          <Box 
            basis="2/3"
            align="end"
            pad="medium"
          />
        </Box>
      </Hero>
    </Anchor>
  </Section>
);

const Splash = props => {
  return (
    <Article 
      scrollStep={true}
      direction="row"
      controls={props.navIsVisible}
      className="Splash"
    >
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
      {_.map(props.stories, buildArticleSection)}
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
  navIsVisible: PropTypes.bool.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
};

export default Splash;