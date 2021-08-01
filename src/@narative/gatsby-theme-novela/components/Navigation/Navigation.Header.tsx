import Logo from "@components/Logo";
import Section from "@components/Section";
import styled from "@emotion/styled";
import Icons from "@icons";
import mediaqueries from "@styles/media";
import {
  copyToClipboard,
  getBreakpointFromTheme,
  getWindowDimensions
} from "@utils";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaBars,
  FaHandPointUp,
  FaMousePointer,
  FaRegCircle
} from "react-icons/fa";
import { useColorMode } from "theme-ui";
import Search from "../search";

const siteQuery = graphql`
  {
    sitePlugin(name: { eq: "@narative/gatsby-theme-novela" }) {
      pluginOptions {
        rootPath
        basePath
      }
    }
  }
`;

//菜单开关
const MenuToggle: React.FC<{}> = (props: any) => {
  const { useMenu, useCursor } = props;
  const [show, setShow] = useMenu;
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  function toggleMenu() {
    setShow(!show);
  }
  console.log('MenuToggle show',show)
  return (
    <IconWrapper onClick={toggleMenu} isDark={isDark} style={{ fontSize: 25 }}>
      {show ? <FaArrowLeft /> : <FaBars />}
    </IconWrapper>
  );
};

//切换主题
const DarkModeToggle: React.FC<{}> = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  function toggleColorMode(event) {
    event.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  }
  return (
    <IconWrapper
      isDark={isDark}
      onClick={toggleColorMode}
      data-a11y="false"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <MoonOrSun isDark={!isDark} />
      <MoonMask isDark={!isDark} />
    </IconWrapper>
  );
};

//鼠标指针
const CursorToggle: React.FC<{}> = (props: any) => {
  const { useCursor,isPC } = props;
  const [cursorType, toggleCursor] = useCursor;
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  console.log('header isPC',isPC)
  if(!isPC){return null}
  return (
    <IconWrapper
      onClick={toggleCursor}
      isDark={isDark}
      style={{ fontSize: 25 }}
    >
      {cursorType === "dot" && <FaRegCircle />}
      {cursorType === "zhua" && <FaHandPointUp />}
      {cursorType === "default" && <FaMousePointer />}
    </IconWrapper>
  );
};

//分享按钮
const SharePageButton: React.FC<{}> = () => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fill = isDark ? "#fff" : "#000";

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(window.location.href);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }
  return (
    <IconWrapper
      isDark={isDark}
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      aria-label="Copy URL to clipboard"
      title="Copy URL to clipboard"
    >
      <Icons.Link fill={fill} />
      <ToolTip isDark={isDark} hasCopied={hasCopied}>
        Copied
      </ToolTip>
    </IconWrapper>
  );
};

const NavigationHeader: React.FC<{}> = (props) => {
  const [showBackArrow, setShowBackArrow] = useState<boolean>(false);
  const [previousPath, setPreviousPath] = useState<string>("/");
  const { sitePlugin } = useStaticQuery(siteQuery);
  const { isPC } = props;
  const [colorMode] = useColorMode();
  const fill = colorMode === "dark" ? "#fff" : "#000";
  const { rootPath, basePath } = sitePlugin.pluginOptions;

  useEffect(() => {
    const { width } = getWindowDimensions();
    const phablet = getBreakpointFromTheme("phablet");

    const prev = localStorage.getItem("previousPath");
    const previousPathWasHomepage =
      prev === (rootPath || basePath) || (prev && prev.includes("/page/"));
    const currentPathIsHomepage =
      location.pathname === (rootPath || basePath) ||
      location.pathname.includes("/page/");

    setShowBackArrow(
      previousPathWasHomepage && !currentPathIsHomepage && width <= phablet
    );
    setPreviousPath(prev);
  }, []);

  // console.log("header show", show);
  console.log("header isPC", isPC);
  return (
    <Section>
      <NavContainer>
        <LogoLink
          to={rootPath || basePath}
          data-a11y="false"
          title="回到首页"
          aria-label="回到首页"
          back={showBackArrow ? "true" : "false"}
        >
          {showBackArrow && (
            <BackArrowIconContainer>
              <Icons.ChevronLeft fill={fill} />
            </BackArrowIconContainer>
          )}
          <Logo fill={fill} />
          <Hidden>回到首页</Hidden>
        </LogoLink>
        <NavControls>
          {showBackArrow ? (
            <button
              onClick={() => navigate(previousPath)}
              title="回到首页"
              aria-label="回到首页"
            >
              <Icons.Ex fill={fill} />
            </button>
          ) : (
            <>
              <Search />
              <DarkModeToggle />
              {isPC && <CursorToggle {...props} />}
              <MenuToggle {...props} />
            </>
          )}
        </NavControls>
      </NavContainer>
    </Section>
  );
};

export default NavigationHeader;

const BackArrowIconContainer = styled.div`
  transition: 0.2s transform var(--ease-out-quad);
  opacity: 0;
  padding-right: 30px;
  animation: fadein 0.3s linear forwards;

  @keyframes fadein {
    to {
      opacity: 1;
    }
  }

  ${mediaqueries.desktop_medium`
    display: none;
  `}
`;

const NavContainer = styled.div`
  position: relative;
  z-index: 100;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;

  ${mediaqueries.desktop_medium`
    padding-top: 50px;
  `};

  @media screen and (max-height: 800px) {
    padding-top: 30px;
  }
`;

const LogoLink = styled(Link)<{ back: string }>`
  position: relative;
  display: flex;
  align-items: center;
  left: ${(p) => (p.back === "true" ? "-54px" : 0)};

  ${mediaqueries.desktop_medium`
    left: 0
  `}

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -10%;
    top: -30%;
    width: 120%;
    height: 160%;
    border: 2px solid ${(p) => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  &:hover {
    ${BackArrowIconContainer} {
      transform: translateX(-3px);
    }
  }
`;

const NavControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${mediaqueries.phablet`
    right: -5px;
  `}
`;

const ToolTip = styled.div<{ isDark: boolean; hasCopied: boolean }>`
  position: absolute;
  padding: 4px 13px;
  background: ${(p) => (p.isDark ? "#000" : "rgba(0,0,0,0.1)")};
  color: ${(p) => (p.isDark ? "#fff" : "#000")};
  border-radius: 5px;
  font-size: 14px;
  top: -35px;
  opacity: ${(p) => (p.hasCopied ? 1 : 0)};
  transform: ${(p) => (p.hasCopied ? "translateY(-3px)" : "none")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${(p) => (p.isDark ? "#000" : "rgba(0,0,0,0.1)")};
  }
`;

export const IconWrapper = styled.button<{ isDark: boolean }>`
  opacity: 0.5;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;
  color: ${(p) => p.theme.colors.primary};
  &:hover {
    opacity: 1;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${(p) => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.tablet`
    display: inline-flex;
    transform: scale(0.708);
    margin-left: 10px;


    &:hover {
      opacity: 0.5;
    }
  `}
`;

// This is based off a codepen! Much appreciated to: https://codepen.io/aaroniker/pen/KGpXZo
const MoonOrSun = styled.div<{ isDark: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${(p) => (p.isDark ? "4px" : "2px")} solid
    ${(p) => p.theme.colors.primary};
  background: ${(p) => p.theme.colors.primary};
  transform: scale(${(p) => (p.isDark ? 0.55 : 1)});
  transition: all 0.45s ease;
  overflow: ${(p) => (p.isDark ? "visible" : "hidden")};

  &::before {
    content: "";
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: 2px solid ${(p) => p.theme.colors.primary};
    border-radius: 50%;
    transform: translate(${(p) => (p.isDark ? "14px, -14px" : "0, 0")});
    opacity: ${(p) => (p.isDark ? 0 : 1)};
    transition: transform 0.45s ease;
  }

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 ${(p) => p.theme.colors.primary},
      0 23px 0 ${(p) => p.theme.colors.primary},
      23px 0 0 ${(p) => p.theme.colors.primary},
      -23px 0 0 ${(p) => p.theme.colors.primary},
      15px 15px 0 ${(p) => p.theme.colors.primary},
      -15px 15px 0 ${(p) => p.theme.colors.primary},
      15px -15px 0 ${(p) => p.theme.colors.primary},
      -15px -15px 0 ${(p) => p.theme.colors.primary};
    transform: scale(${(p) => (p.isDark ? 1 : 0)});
    transition: all 0.35s ease;

    ${(p) => mediaqueries.tablet`
      transform: scale(${p.isDark ? 0.92 : 0});
    `}
  }
`;

const MoonMask = styled.div<{ isDark: boolean }>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: ${(p) => p.theme.colors.background};
  transform: translate(${(p) => (p.isDark ? "14px, -14px" : "0, 0")});
  opacity: ${(p) => (p.isDark ? 0 : 1)};
  transition: ${(p) => p.theme.colorModeTransition}, transform 0.45s ease;
`;

const Hidden = styled.span`
  position: absolute;
  display: inline-block;
  opacity: 0;
  width: 0px;
  height: 0px;
  visibility: hidden;
  overflow: hidden;
`;
