import React from 'react';

class NewsCard extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
      {this.props.list}
      <div className="newsCard">
        <div className="newsCard-box">
          <span className="newsCard-date">{this.props.lastUpdate}</span>
          <span className="newsCard-forEvent">{this.props.category}</span>
        </div>
        <span className="newsCard-text">
          {this.props.noteTitle}
        </span>
      </div>
      </>
    );
  }
}

export default NewsCard;
