import React from 'react';
import Appbar from '../Appbar';

const Layout = ({ children }) => (
  <>
    <Appbar />
    {children}
  </>
);

export default Layout;
