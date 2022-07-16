import React from 'react';
import MoreBtn from '../MoreBtn/MoreBtn.jsx';

class MemCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="memCard">
        <h2>{this.props.name}</h2>
        <p>{this.props.text}</p>
        <MoreBtn url={this.props.url} />
      </div>
    );
  }
}

export default MemCard;
