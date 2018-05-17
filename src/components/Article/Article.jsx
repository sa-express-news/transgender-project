import React      from 'react';
import PropTypes  from 'prop-types';

import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';

import SlideshowButton from '../SlideshowButton/SlideshowButton';

import './Article.scss';

const Article = props => (
  <div className="Article">
    <Section 
      pad="none"
      justify="center"
      align="center"
      colorIndex="grey-1"
      full="horizontal"
      className="slide"
    >
      <Anchor
        href={props.story.slug}
        target="_blank"
      >
        <Hero 
          background={
            <Image 
              src={props.story.bgImg}
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
                tag="h2"
                strong={true}
              >
                {props.story.title}
              </Heading>
              <Heading
                margin="none"
                align="start"
                tag="h3"
              >
                {props.story.excerpt}
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
    <SlideshowButton right={false} onClick={props.moveBackward} />
    <SlideshowButton right={true} onClick={props.moveForward} />
  </div>
);

Article.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
  }).isRequired,
  moveForward: PropTypes.func.isRequired,
  moveBackward: PropTypes.func.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
};

export default Article;