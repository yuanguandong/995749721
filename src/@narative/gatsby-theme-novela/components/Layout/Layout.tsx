import NavigationFooter from "@components/Navigation/Navigation.Footer";
import NavigationHeader from "@components/Navigation/Navigation.Header";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { globalStyles } from "@styles";
import { useLocalStorageState } from 'ahooks';
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useColorMode } from "theme-ui";
import ArticlesContextProvider from "../../sections/articles/Articles.List.Context";
import { SideMenu } from "../sidemenu";
/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{}> = (props) => {
  const { children } = props
  const [colorMode] = useColorMode();
  const [showMenu, setShowMenu] = useLocalStorageState<boolean>('menu-show',false);

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, "*");
  }, [colorMode]);

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
      </Helmet>
      <ArticlesContextProvider>
        <Container>
          <SideMenu useMenu={[showMenu, setShowMenu]}/>
          <Main>
            <Global styles={globalStyles} />
            <NavigationHeader useMenu={[showMenu, setShowMenu]}/>
            {children}
            <NavigationFooter />
          </Main>
        </Container>
      </ArticlesContextProvider>
    </>
  );
};

export default Layout;


const Container = styled.div`
  display:flex;
  min-height: 100vh;
  transition: ${(p) => p.theme.colorModeTransition};
`;

const Main = styled.div`
  position:relative;
  flex:18;
  background: ${(p) => p.theme.colors.background};
  transition: ${(p) => p.theme.colorModeTransition};
  min-height: 100vh;
  @media (max-width: 680px) {

    width:100%;

  }
`;


