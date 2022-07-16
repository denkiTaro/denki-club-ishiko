import React from 'react';
import './_MoreBtn.scss';
import { Link } from 'react-router-dom';
import Team from '../../Team/Team.jsx';

class MoreBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="moreBtn">
        <Link to={'/' + this.props.url}>
          <span>MORE</span>
        </Link>
      </div>
    );
  }
}

export default MoreBtn;
