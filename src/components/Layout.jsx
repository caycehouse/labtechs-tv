import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <React.Fragment>{children}</React.Fragment>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
