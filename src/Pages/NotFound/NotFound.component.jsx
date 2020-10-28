import React from 'react';
import {Link} from 'react-router-dom';
import './not-found.css';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found">
        <p>
          The link you followed may be broken, or the page may have been
          removed.
          <Link to="/"> Go back to Harris</Link>
        </p>
      </div>
    );
  }
}