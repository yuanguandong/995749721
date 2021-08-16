import NavigationFooter from "@components/Navigation/Navigation.Footer";
import NavigationHeader from "@components/Navigation/Navigation.Header";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { globalStyles } from "@styles";
import { isBrowser } from "@utils";
import { useLocalStorageState } from "ahooks";
import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Keyevent from "react-keyevent";
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
  const [colorMode,setColorMode] = useColorMode();
  const isPC = isBrowser() ? window.innerWidth > 680 : false;
  const [showMenu, setShowMenu] = useLocalStorageState<boolean>('showMenu',isPC);
  const [showMusic, setShowMusic] = useLocalStorageState<boolean>('showMusic',true);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cursorType, setCursorType] = useLocalStorageState<string>(
    "curType",
    isPC ? "zhua" : "default"
  );

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

  const onCtrlB = () => {
    setShowMenu(!showMenu);
  };

  const onMetaB = () => {
    setShowMenu(!showMenu);
  };

  const onMetaS = () => {
    setSearchOpen(!searchOpen);
  };

  const onAltC = () => {
    toggleCursor()
  };

  const onShiftT = () => {
    setColorMode(colorMode==='dark'?'light':'dark')
  };

  const onEsc = ()=>{
    navigate('/')
  }

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
      <Keyevent
        events={{
          onCtrlB,
          onMetaB,
          onMetaS,
          onAltC,
          onShiftT,
          onEsc
        }}
      >
        <ArticlesContextProvider>
          <Container cursorType={cursorType}>
            <SideMenu
              useMenu={[showMenu, setShowMenu]}
              isPC={isPC}
              useMusic={[showMusic, setShowMusic]}
            />
            <Main>
              <Global styles={globalStyles} />
              <NavigationHeader
                useMenu={[showMenu, setShowMenu]}
                useCursor={[cursorType, toggleCursor]}
                isPC={isPC}
                searchOpen={searchOpen}
              />
              {children}
              <NavigationFooter />
            </Main>
          </Container>
        </ArticlesContextProvider>
        {cursorType === "dot" && isPC && <DotCursor />}
      </Keyevent>
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
