import React, {Component} from 'react';
import Layout from '../../Components/shared/Layout';
import {Link} from 'react-router-dom';

export default class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <p>
          The link you followed may be broken, or the page may have been
          removed.
          <Link to="/"> Go back to Harris</Link>
        </p>
      </Layout>
    );
  }
}
