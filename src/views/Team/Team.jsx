import React from 'react';
import Helmet from 'react-helmet';
import './Team.scss';
import Header from '../../components/Header/Header.jsx';
import About from './TeamParts/About/About.jsx';
import Feature from './TeamParts/Feature/Feature.jsx';
import Movies from './TeamParts/Movies/Movies.jsx';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="team">
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>

        <Header />
        <div
          className="team-img"
          style={{
            backgroundImage: `url(${this.props.img})`,
          }}
          >
          <h2>{this.props.title}</h2>
        </div>

        <About about={this.props.about} />
        <Feature
          fComentFirst={this.props.fComentFirst}
          fComentSecond={this.props.fComentSecond}
          fComentThird={this.props.fComentThird}
          imgFirst={this.props.imgFirst}
          imgSecond={this.props.imgSecond}
          imgThird={this.props.imgThird}
        />
        <Movies
          videoFirst={this.props.videoFirst}
          videoSecond={this.props.videoSecond}
          videoThird={this.props.videoThird}
        />
      </div>
    );
  }
}

export default Team;
