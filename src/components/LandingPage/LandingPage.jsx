import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

import store from '../../store';
import actions from '../../actions';

import Splash from '../Splash/Splash';

const header = () => (
  <Header 
    fixed={true}
    splash={false}
  >
    <Title>Life In Transition</Title>
    <Box flex={true}
      justify='end'
      direction='row'
      responsive={false}
    />
  </Header>
)

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    store.dispatch(actions.story.getStories());
  }

  render() {
    return (
      <div>
        <Splash 
          stories={this.props.stories}
          className="Splash"
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { 
    stories: store.stories,
  }
};
export default connect(mapStateToProps)(LandingPageContainer);