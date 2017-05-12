import React from 'react';
import PropTypes from 'prop-types';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';

const Splash = props => {
  return (
    <Section 
      pad='none'
      justify='center'
      align='center'
      colorIndex='grey-2'
      full={true}
    >
      <Headline margin='none'>
        {props.stories[0].title}
      </Headline>
    </Section>
  );
};

Splash.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    cover_partial: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Splash;