import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './Bios.scss';

import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Video from 'grommet/components/Video';
import Footer from 'grommet/components/Footer';

let currentTransition = null;


class Bios extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: props.bio,
		};
		this.buildImgPath   = this.buildImgPath.bind(this);
		this.buildExitLink  = this.buildExitLink.bind(this);
		this.buildVideoPath = this.buildVideoPath.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		this.clearPhotoTransitionInterval();
    this.setPhotoTransitionInterval();
	}

	componentWillUnmount() {
		this.clearPhotoTransitionInterval();
	}

	buildImgPath(path, img) {
		return require(`../../images/${path}/${img}.JPG`);
	}

	buildVideoPath(vid) {
		return require(`../../videos/${vid}`);
	}

	buildExitLink() {
		const { setBio } = this.props;
		return (<Title onClick={setBio.bind(null, null)}><LinkPreviousIcon /> Exit Bio</Title>);
	}

	clearPhotoTransitionInterval() {
    window.clearInterval(currentTransition);
  }

  transitionPhotos() {    
    const { subject } = this.state,
          currPhoto   = subject.displayed,
          lastPhoto   = subject.photos.length - 1;

    if (currPhoto === lastPhoto) {
      subject.displayed = 0;
    } else {
      subject.displayed += 1;
    }

    this.setState({ subject });
  }

  setPhotoTransitionInterval() {
    currentTransition = window.setInterval(this.transitionPhotos.bind(this), 3000);
  }

	getVisibility(subject, idx) {
    return subject.displayed === idx;
  }

	render() {
		const { subject } = this.state;
		return (
			<Article 
	      full={true}
	      colorIndex="grey-1"
	      align="center"
	      pad="small"
	      className="Bio"
	    >
	    	<Header full="horizontal" size="small">
				  <Box 
				    justify="start"
				    direction="row"
				    responsive={false}
				    full="horizontal"
				  >
				   	{this.buildExitLink()}
				  </Box>
				</Header>
	    	<Heading margin="medium" tag="h1">{subject.name}, {subject.age}</Heading>
	    	{_.map(subject.photos, (photo, idx) => (
          <div key={idx}>
            {this.getVisibility(subject, idx) &&
              <Animate enter={{'animation': 'fade', 'duration': 400, 'delay': 0}}>
                <Image 
                  src={this.buildImgPath(subject.path, photo)}
                  full={false}
				  				fit='contain'
				  				size='medium'
                />
              </Animate>
            }
            {!this.getVisibility(subject, idx) &&
              <Image 
                src={this.buildImgPath(subject.path, photo)}
                className="hide"
                full={false}
				  			fit='contain'
				  			size='medium'
              />
            }
          </div>
        ))}
				{_.map(subject.bio, (para, key) => <Paragraph key={key} size="large">{para}</Paragraph>)}
				{subject.stories.length !== 0 && (
					<Table className="article-table">
						<thead>
							<tr>
								<th>Stories featuring {subject.name}</th>
							</tr>
						</thead>
						<tbody>
							{_.map(subject.stories, (story, key) => (
								<TableRow key={key}>
									<td>
										<Anchor
											label={`– ${story.title}`}
											href={story.url}
											target="_blank"
										/>
									</td>
								</TableRow>
							))}
						</tbody>
					</Table>
				)}
				{subject.video && (
					<Video 
	          full={false}
					  size='large'
					  poster={this.buildImgPath(subject.path, subject.photos[0])}
					  className="video-block"
	        >
	          <source 
	            src={this.buildVideoPath(subject.video)}
	            type="video/mp4"
	          />
	        </Video>
				)}
				<Footer 
					full="horizontal"
					size="small"
					pad={{
						horizontal: 'none',
						vertical: 'medium',
					}}
				>
				  <Box 
				    justify="start"
				    direction="row"
				    responsive={false}
				    full="horizontal"
				  >
				   	{this.buildExitLink()}
				  </Box>
				</Footer>
			</Article>
		);
	}
}

Bios.propTypes = {
	setBio: PropTypes.func.isRequired,
	bio: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    stories: PropTypes.array.isRequired,
    age: PropTypes.number.isRequired,
    audio: PropTypes.string,
    video: PropTypes.string,
  }).isRequired,
};

export default Bios;