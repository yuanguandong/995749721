import styled from "@emotion/styled";
import { useLocalStorageState } from "ahooks";
import { Avatar } from "antd";
import { graphql, Link, useStaticQuery } from "gatsby";
import _ from "lodash";
import React, { useLayoutEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useColorMode } from "theme-ui";
import { List, ListItem } from "../artitem";

const authorQuery = graphql`
  query MyQuery {
    allAuthor {
      nodes {
        id
        name
        slug
        avatar {
          publicURL
        }
      }
    }
    allArticle(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          date(formatString: "yyyy-MM-DD")
          excerpt
          hero {
            publicURL
            full: childImageSharp {
              fluid(maxWidth: 150, quality: 100) {
                src
                sizes
              }
            }
          }
          slug
          title
          timeToRead
        }
      }
    }
  }
`;

export const SideMenu = (props) => {
  const { useMenu, isPC } = props;
  const [show, setShow] = useMenu;
  const [colorMode] = useColorMode();
  const ref = useRef();
  const [scrollPosition, setScrollPosition] = useLocalStorageState<string>(
    "scrollPosition",
    "0"
  );
  //作者
  const results = useStaticQuery(authorQuery);
  const {
    allAuthor: { nodes },
    allArticle: { edges },
  } = results;

  const {
    name,
    slug,
    avatar: { publicURL },
  } = nodes[0];

  const handleClose = () => {
    setShow(false);
  };

  const syncPosition = _.debounce((e) => {
    const position = _.get(ref, "current.scrollTop");
    if (!position) {
      setScrollPosition(String(0));
      return;
    }
    setScrollPosition(String(position));
  }, 20);

  useLayoutEffect(() => {
    const instance = ref.current;
    if (instance && isPC) {
      instance.addEventListener("scroll", syncPosition);
    }
    return () => {
      instance.removeEventListener("scroll", syncPosition);
    };
  }, []);

  useLayoutEffect(() => {
    const instance = ref.current;
    if (instance && isPC) {
      instance.scrollTo(0, parseInt(scrollPosition));
    }
  }, []);


  return (
    <>
      <SideMenuContainer ref={ref} show={show}>
        <AvatarContainer colorMode={colorMode}>
          <Link to={slug}>
            <Avatar size={100} src={publicURL} />
            <Name>{name}</Name>
          </Link>
        </AvatarContainer>
        <List reverse={false} gridLayout={"row"} hasOnlyOneArticle={false}>
          {edges.map((item) => (
            <ListItem article={item.node} narrow={false} key={item.node.slug} />
          ))}
        </List>
        <Footer>Stay hungry & Stay foolish</Footer>
        <Close onClick={handleClose}>
          <FaArrowLeft />
        </Close>
      </SideMenuContainer>
    </>
  );
};

const AvatarContainer = styled.div`
  width: 120px;
  min-height: 200px;
  height: 30vh;
  padding: 20px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Name = styled.div`
  margin-top: 20px;
  font-weight: bold;
  color: ${(p) => p.theme.colors.primary};
`;

export const SideMenuContainer = styled.div<{ show }>`
  min-width: 200px;
  height: 100vh;
  position: sticky;
  top: 0;
  border-right: 1px solid rgba(128, 128, 128, 0.2);
  overflow-y: auto;
  background: ${(p) => p.theme.colors.background};
  transition: all 0.2s;

  flex: ${(p) => (p.show ? "6" : "0")};
  min-width: ${(p) => (p.show ? "200px" : "0")};
  opacity: ${(p) => {
    return p.show ? "1" : "0";
  }};

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  @media (max-width: 680px) {
    position: fixed;
    top: 0;
    left: 0;
    display: ${(p) => (p.show ? "block" : "none")};
    z-index: 9999;
  }

`;
  
const Close = styled.div`
  font-size: 25px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  color: ${(p) => p.theme.colors.primary};
`;

const Footer = styled.div`
  font-size: 14px;
  padding: 50px;
  text-align: center;
  opacity: 0.5;
  color: ${(p) => p.theme.colors.primary};
`;
