import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

function SEO({title}) {
  const titleText = title ? `${title} - Haris` : 'Haris';
  return (
    <Helmet>
      <title>{titleText}</title>
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
};

export default SEO;