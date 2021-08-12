import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import loadable from '@loadable/component';
import Header from 'src/features/Header';
import Footer from 'src/features/Footer';
import ErrorBoundary from '../../ErrorBoundary';
import Error404 from 'src/pages/Error404Page';
import { observer } from 'mobx-react-lite';
import ContentFallback from 'src/features/App/Layout/ContentFallback';
import Content from 'src/features/App/Layout/Content';

const Home = loadable(() => import(/* webpackPrefetch: true */ '../../../pages/HomePage'));

const Layout: React.FC = observer(() => {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary fallback={ContentFallback}>
        <Content>
          <Router primary={false}>
            <Home path="/" />
            <Error404 default />
          </Router>
        </Content>
      </ErrorBoundary>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  );
});

export default Layout;
