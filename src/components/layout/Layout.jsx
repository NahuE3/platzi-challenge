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
        <title>{title} | Foody+</title>
        <meta name="description" content={subtitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@foody_plus" />
        <meta name="twitter:creator" content="@foody_plus" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta
          name="twitter:image"
          //content="BannerFoody"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta
          property="og:image"
          //content="BannerFoody"
        />
        <meta property="og:url" content="foodyplus.co" />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Navbar isSearch={search} />
      <Tabbar />
      <Content center={center}>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
