import React, { Component } from 'react';
import { connect } from 'react-redux';

import LandingPage from '../LandingPage/LandingPage';
import Bios from '../Bios/Bios';

import './App.scss';

import store from '../../store';
import actions from '../../actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: null,
    };
    this.setBio = this.setBio.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    store.dispatch(actions.story.getStories());
    store.dispatch(actions.navCopy.getNavCopy());
    store.dispatch(actions.photo.getPhotos());
  }

  setBio(subject) {
    this.setState({ bio: subject });
  }

  render() {
    const { 
            stories,
            photos,
            navCopy,
          }          = this.props;
    const { bio }    = this.state;

    return (
      <div className="App">
        <div className="content-wrapper">
          {bio && (
            <Bios 
              bio={bio}
              setBio={this.setBio}
            />
          )}
          {!bio && (
            <LandingPage 
              stories={stories}
              photos={photos}
              navCopy={navCopy}
              setBio={this.setBio}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { 
    stories: store.stories,
    photos: store.photos,
    navCopy: store.navCopy,
  }
};
export default connect(mapStateToProps)(App);
