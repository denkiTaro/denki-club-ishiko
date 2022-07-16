import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movies">
        <h1>動画</h1>

        <div className="movies-box">
          <video
            className="movies-box-movie"
            src={this.props.videoFirst}
            playsInline
            controls
          ></video>
          <video
            className="movies-box-movie"
            src={this.props.videoSecond}
            playsInline
            controls
          ></video>
          <video
            className="movies-box-movie"
            src={this.props.videoThird}
            playsInline
            controls
          ></video>
        </div>
      </div>
    );
  }
}

export default Movies;
