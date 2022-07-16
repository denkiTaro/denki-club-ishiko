import React from 'react';

class Feature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feature">
        <h1>特徴</h1>

        <div className="feature-cards">
          <div className="feature-cards-card">
            <div
              className="feature-cards-card-img"
              style={{
                backgroundImage: `url(${this.props.imgFirst})`,
              }}
            ></div>
            <p>{this.props.fComentFirst}</p>
          </div>

          <div className="feature-cards-card">
            <div
              className="feature-cards-card-img"
              style={{
                backgroundImage: `url(${this.props.imgSecond})`,
              }}
            ></div>
            <p>{this.props.fComentSecond}</p>
          </div>

          <div className="feature-cards-card">
            <div
              className="feature-cards-card-img"
              style={{
                backgroundImage: `url(${this.props.imgThird})`,
              }}
            ></div>
            <p>{this.props.fComentThird}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
