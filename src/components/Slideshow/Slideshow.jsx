import React, {Component} 		from 'react';
import PropTypes 				from 'prop-types';
import _ 						from 'lodash';
import { CSSTransitionGroup } 	from 'react-transition-group';

import Video 	from '../Video/Video';
import Article 	from '../Article/Article';

import './Slideshow.scss';

class Slideshow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex : 0,
			loadedPhotos: [],
			touchStartX: null,
			touchStartY: null,
			lastChange: new Date(),
			slides: this.getSlides(),
		};
	 	this.moveForward = this.moveForward.bind(this);
	 	this.moveBackward = this.moveBackward.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.stories.length !== this.props.stories.length) {
			const slides = this.getSlides();
			this.setState({ slides });
		}
	}

	moveForward() {
		let maxIndex = this.state.slides.length - 1;
		let currentIndex = this.state.activeIndex;

		let newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;

		this.setState(prevState => ({
  			activeIndex: newIndex,
  			lastChange: new Date()
		}));
	}

	moveBackward() {
		let currentIndex = this.state.activeIndex;

		let newIndex = currentIndex === 0 ? this.state.slides.length - 1 : currentIndex -1;

		this.setState(prevState => ({
      		activeIndex: newIndex,
      		lastChange: new Date()
   		}));
	}

	handleTouchStart(event) {
		const theTouch = event.touches[0];

		this.setState(prevState => ({
			touchStartX: theTouch.screenX,
			touchStartY: theTouch.screenY
		}));
	}

	handleTouchEnd(event) {
		const theTouch = event.changedTouches[0];

		if(this.state.touchStartX === null || this.state.touchStartY === null) return;

		if (this.state.touchStartX - theTouch.screenX >= 75) {
			this.moveBackward();
		}

		if(theTouch.screenX - this.state.touchStartX >= 75) {
			this.moveForward();
		}

	}

	shouldComponentUpdate(nextProps, nextState) {
		const millisecondsSinceLastChange = new Date().getTime() - this.state.lastChange.getTime();

		if (millisecondsSinceLastChange < 400){
			return false;
		}

		return true;
	}

	getSlides() {
		const articles = this.props.stories.map((story, idx) => (
			<Article story={story} moveForward={this.moveForward} moveBackward={this.moveBackward} 
			handleTouchStart={this.handleTouchStart} handleTouchEnd={this.handleTouchEnd} key={idx} />
		));
		const video = (<Video moveForward={this.moveForward} moveBackward={this.moveBackward} 
			handleTouchStart={this.handleTouchStart} handleTouchEnd={this.handleTouchEnd} />);
		return [video].concat(articles)
	}

	render() {
		const { slides } = this.state;
		return (
			<div className='Slideshow'>
				<CSSTransitionGroup
					transitionName='slideshow'
					transitionEnterTimeout={350}
					transitionLeave={false}
				>
					{slides[this.state.activeIndex]}
				</CSSTransitionGroup>
				<div className='Slideshow-load'>
					{this.props.stories.map((story, index)=>{
						return <img src={story.bgImg} key={index} alt={story.title}/>
					})}
				</div>
			</div>
		);
	}
}

Slideshow.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Slideshow;