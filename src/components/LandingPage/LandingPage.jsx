import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactVisibilitySensor from 'react-visibility-sensor';

import store from '../../store';
import actions from '../../actions';

import './LandingPage.scss';

import NavBar from '../NavBar/NavBar';
import Splash from '../Splash/Splash';
import SubNav from '../SubNav/SubNav';
import Cards from '../Cards/Cards';


class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      isSmallScreen: true,
      navIsVisible: false,
    };
    this.setIsMobile      = this.setIsMobile.bind(this);
    this.transitionPhotos = this.transitionPhotos.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.setIsMobile();
    window.addEventListener("resize", this.setIsMobile);
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.setIsMobile);
  }

  getData() {
    Promise.all([
      store.dispatch(actions.story.getStories()),
      store.dispatch(actions.navCopy.getNavCopy()),
      store.dispatch(actions.photo.getPhotos())
    ]).then(payload => this.setState({ photos: payload[2].photos }));
  }

  setIsMobile() {
    const isSmallScreen = window.innerWidth < 900;
    if (isSmallScreen !== this.state.isSmallScreen) {
      this.setState({ isSmallScreen });
    }
  }

  transitionPhotos(idx, isReset = false) {
    if (!this.state.photos.length) return;
    
    const { photos } = this.state,
          currPhoto  = photos[idx].displayed,
          lastPhoto  = photos[idx].photos.length - 1;

    if (isReset || currPhoto === lastPhoto) {
      photos[idx].displayed = 0;
    } else {
      photos[idx].displayed += 1;
    }

    this.setState({ photos });
  }

  isNavVisible(navIsVisible) {
    if (navIsVisible !== this.state.navIsVisible) {
      this.setState({ navIsVisible });
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavBar 
          className="NavBar"
          isSmallScreen={this.state.isSmallScreen}
        />
        <ReactVisibilitySensor onChange={this.isNavVisible.bind(this)} />
        <Splash 
          stories={this.props.stories}
          navIsVisible={this.state.navIsVisible}
          isSmallScreen={this.state.isSmallScreen}
        />
        <SubNav copy={this.props.navCopy.introduction} />
        <Cards 
          photos={this.state.photos}
          transitionPhotos={this.transitionPhotos}
        />
        <SubNav
          copy={this.props.navCopy.credits}
          title="Credits"
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { 
    stories: store.stories,
    navCopy: store.navCopy,
  }
};
export default connect(mapStateToProps)(LandingPageContainer);