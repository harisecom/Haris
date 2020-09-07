import React from 'react';
import SEO from './Seo';
import PropTypes from 'prop-types';

export default function Layout({title, children}) {
  return (
    <section>
      <SEO title={title} />
      <main>{children}</main>
    </section>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};