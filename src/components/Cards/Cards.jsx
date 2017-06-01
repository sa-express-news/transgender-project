import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './Cards.scss';

import Article from 'grommet/components/Article';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';
import Heading from 'grommet/components/Heading';
import MusicIcon from 'grommet/components/icons/base/Music';

let currentTransition = null;
let currentTimeout = null;


class Cards extends Component {
  constructor(props) {
    super(props);
    this.buildImgPath      = this.buildImgPath.bind(this);
    this.buildAudioPath    = this.buildAudioPath.bind(this);
    this.onPhotoMouseEnter = this.onPhotoMouseEnter.bind(this);
    this.onPhotoMouseLeave = this.onPhotoMouseLeave.bind(this);
    this.getVisibility     = this.getVisibility.bind(this);
  }

  buildImgPath(path, img) {
    return require(`../../images/${path}/${img}.JPG`);
  };

  buildAudioPath(file) {
    return require(`../../audio/${file}`);
  }

  setBio(subject, idx) {
    this.clearAllTimers(idx);
    this.props.setBio(subject);
  }

  clearPhotoTransitionInterval() {
    window.clearInterval(currentTransition);
  }

  clearAudioTimeout() {
    window.clearTimeout(currentTimeout);
  }

  setPhotoTransitionInterval(idx) {
    currentTransition = window.setInterval(this.props.transitionPhotos.bind(this, idx), 3000);
  }

  setAudioTimeout(idx) {
    currentTimeout = window.setTimeout(this.playAudio.bind(this, idx), 1000);
  }

  resetPhotos(idx) {
    const currPhoto = this.props.photos[idx].displayed;
    if (currPhoto !== 0) {
      this.props.transitionPhotos(idx, 'isReset');
    }
  }

  playAudio(idx) {
    const audioFile = this.props.photos[idx].audio;
    if (audioFile && this.refs[audioFile]) {
      this.refs[audioFile].play();
    }
  }

  stopAudio(idx) {
    const audioFile = this.props.photos[idx].audio;
    if (audioFile && this.refs[audioFile]) {
      this.refs[audioFile].pause();
      this.refs[audioFile].currentTime = 0;
    }
  }

  onPhotoMouseEnter(idx) {
    this.clearPhotoTransitionInterval();
    this.clearAudioTimeout();
    this.setPhotoTransitionInterval(idx);
    this.setAudioTimeout(idx);
  }

  onPhotoMouseLeave(idx) {
    this.clearAllTimers(idx);
  }

  clearAllTimers(idx) {
    this.clearPhotoTransitionInterval();
    this.clearAudioTimeout();
    this.resetPhotos(idx);
    this.stopAudio(idx);
  }

  getVisibility(subject, idx) {
    return subject.displayed === idx;
  }

  render() {
    const { photos, isSmallScreen } = this.props;
    return (
      <Article 
        full="horizontal"
        colorIndex="grey-1"
      >
        <Tiles fill={true} flush={false}>
          {_.map(photos, (subject, key) => (
            <Tile 
              key={key}
              className="profile"
              onClick={this.setBio.bind(this, subject, key)}
            >
              {_.map(subject.photos, (photo, idx) => (
                <div key={idx}>
                  {this.getVisibility(subject, idx) &&
                    <Animate enter={{'animation': 'fade', 'duration': 400, 'delay': 0}}>
                      <Image 
                        src={this.buildImgPath(subject.path, photo)}
                        onMouseEnter={this.onPhotoMouseEnter.bind(null, key)}
                        onMouseLeave={this.onPhotoMouseLeave.bind(null, key)}
                      />
                    </Animate>
                  }
                  {!this.getVisibility(subject, idx) &&
                    <Image 
                      src={this.buildImgPath(subject.path, photo)}
                      className="hide"
                    />
                  }
                </div>
              ))}
              <Heading tag="h3">
                {subject.name}, {subject.age}
                {subject.audio && !isSmallScreen && (
                  <MusicIcon
                    size="xsmall"
                    colorIndex="light-1"
                    className="music-icon"
                  />
                )}</Heading>
              {subject.audio &&
                <audio ref={subject.audio}>
                  <source src={this.buildAudioPath(subject.audio)} type="audio/mpeg" />
                </audio>
              }
            </Tile>
          ))}
        </Tiles>
      </Article>
    );
  }
}

Cards.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    stories: PropTypes.array.isRequired,
    age: PropTypes.number.isRequired,
    audio: PropTypes.string,
    video: PropTypes.string,
  }).isRequired).isRequired,
  setBio: PropTypes.func.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
};

export default Cards;