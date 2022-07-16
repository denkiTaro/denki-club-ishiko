import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <h1>班について</h1>
        <p>{this.props.about} </p>
      </div>
    );
  }
}

export default About;
