import React from 'react';
import Layout from '../../Components/shared/Layout';
import {Link} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer.component';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <p>
          The link you followed may be broken, or the page may have been
          removed.
          <Link to="/"> Go back to Harris</Link>
        </p>
        <Footer />
      </Layout>
    );
  }
}
