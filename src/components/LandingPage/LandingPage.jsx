import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactVisibilitySensor from 'react-visibility-sensor';

import './LandingPage.scss';

import NavBar from '../NavBar/NavBar';
import Splash from '../Splash/Splash';
import SubNav from '../SubNav/SubNav';
import Cards from '../Cards/Cards';


class LandingPage extends Component {
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
    const { photos } = this.props;
    this.setIsMobile();
    if (photos.length) { this.addPhotosToState(photos); }
    window.addEventListener("resize", this.setIsMobile);
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.setIsMobile);
  }

  componentWillReceiveProps(nextProps) {
    const { photos } = nextProps;
    this.addPhotosToState(photos);
  }

  addPhotosToState(photos) {
    this.setState({ photos });
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
    console.log(photos)

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
          setBio={this.props.setBio}
          isSmallScreen={this.state.isSmallScreen}
        />
        <SubNav
          copy={this.props.navCopy.credits}
          title="Credits"
        />
      </div>
    );
  }
}

LandingPage.propTypes = {
  setBio: PropTypes.func.isRequired,
};

export default LandingPage;