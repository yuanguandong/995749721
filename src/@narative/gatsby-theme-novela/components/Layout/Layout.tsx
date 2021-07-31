import NavigationFooter from "@components/Navigation/Navigation.Footer";
import NavigationHeader from "@components/Navigation/Navigation.Header";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { globalStyles } from "@styles";
import { isBrowser } from "@utils";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useColorMode } from "theme-ui";
import ArticlesContextProvider from "../../sections/articles/Articles.List.Context";
import DotCursor from "../dotcursor";
import { SideMenu } from "../sidemenu";
import "./index.less";
/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{}> = (props) => {
  const { children } = props;
  const [colorMode] = useColorMode();
  const initialMenuShow = isBrowser() ? window.innerWidth > 680 : true;
  const [showMenu, setShowMenu] = useState<boolean>(initialMenuShow);
  const [cursorType, setCursorType] = useState<string>("zhua");

  const toggleCursor = () => {
    switch (cursorType) {
      case "default":
        setCursorType("zhua");
        break;
      case "zhua":
        setCursorType("dot");
        break;
      case "dot":
        setCursorType("default");
        break;
      default:
        break;
    }
  };

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
        <Container cursorType={cursorType}>
          <SideMenu useMenu={[showMenu, setShowMenu]} />
          <Main>
            <Global styles={globalStyles} />
            <NavigationHeader
              useMenu={[showMenu, setShowMenu]}
              useCursor={[cursorType, toggleCursor]}
            />
            {children}
            <NavigationFooter />
          </Main>
        </Container>
      </ArticlesContextProvider>
      {cursorType === "dot" && <DotCursor />}
    </>
  );
};

export default Layout;

const Container = styled.div<{ cursorType }>`
  display: flex;
  min-height: 100vh;
  transition: ${(p) => p.theme.colorModeTransition};
  cursor: ${(p) => {
    let res = "";
    switch (p.cursorType) {
      case "dot":
        res = "none";
        break;
      case "zhua":
        res = 'url("/zhua.cur"), default';
        break;
      default:
        break;
    }
    return res;
  }};
`;

const Main = styled.div`
  position: relative;
  flex: 18;
  background: ${(p) => p.theme.colors.background};
  transition: ${(p) => p.theme.colorModeTransition};
  min-height: 100vh;
  @media (max-width: 680px) {
    width: 100%;
  }
`;
