import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header currentPath={children.props.location.pathname} />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
