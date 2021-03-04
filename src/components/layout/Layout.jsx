//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import { Helmet } from 'react-helmet';
//Import de componentes.
import Navbar from './nav/Navbar';
import Tabbar from './nav/Tabbar';
import Content from './content/Content';
import Footer from './content/Footer';

const Layout = ({ children, title, subtitle, center, search }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Foody+</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Navbar isSearch={search} />
      <Tabbar />
      <Content center={center}>{children}</Content>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
