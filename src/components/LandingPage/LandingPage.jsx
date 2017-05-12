import React, { Component } from 'react';
import { connect } from 'react-redux';

import Article from 'grommet/components/Article';

import store from '../../store';
import actions from '../../actions';

import Splash from '../Splash/Splash';

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
      <Article>
        <Splash stories={this.props.stories} />
      </Article>
    );
  }
}

const mapStateToProps = store => {
  return { 
    stories: store.stories,
  }
};
export default connect(mapStateToProps)(LandingPageContainer);