import NavigationFooter from '@components/Navigation/Navigation.Footer';
import NavigationHeader from '@components/Navigation/Navigation.Header';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { globalStyles } from '@styles';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useColorMode } from 'theme-ui';
import ArticlesContextProvider from '../../sections/articles/Articles.List.Context';


/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{}> = ({ children }) => {
  const [colorMode] = useColorMode();

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, '*');
  }, [colorMode]);

  return (
    <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"/>
    </Helmet>
    <ArticlesContextProvider>
      <Container>
        <Global styles={globalStyles} />
        <NavigationHeader />
        {children}
        <NavigationFooter />
      </Container>
    </ArticlesContextProvider>
    </>
  );
}

export default Layout;

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: ${p => p.theme.colorModeTransition};
  min-height: 100vh;
`;
