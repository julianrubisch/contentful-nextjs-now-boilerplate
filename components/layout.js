/* eslint-disable no-undef, no-unused-vars */
import Head from 'next/head';
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

import stylesheet from '../styles/index.scss';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {

  componentDidMount() {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
  }

  render() {
    return  (
      <div style={{ height: '100%' }}>
        <Head>
          <title>Next / Contentful / Bootstrap 4 Boilerplate</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />      
        </Head>      
        
        <div className="container-fluid" style={{ height: '100%' }}>
          {this.props.children}
        </div>
      </div>
    );
    
  }
}


export default Layout;
