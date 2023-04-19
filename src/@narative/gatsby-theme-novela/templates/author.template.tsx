import styled from "@emotion/styled";
import React from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Section from "@components/Section";

import AuthorHero from "../sections/author/Author.Hero";

import { Template } from "@types";

const ArticlesPage: Template = ({ location, pageContext }) => {
  const author = pageContext.additionalContext.author;
  const articles = pageContext.group;

  return (
    <Layout>
      <SEO pathname={location.pathname} title={author.name} description={author.bio} />
      <Section narrow>
        <AuthorHero author={author} />
        {/* <AuthorArticles articles={articles} />
        <AuthorPaginator>
          <Paginator {...pageContext} />
        </AuthorPaginator> */}
      </Section>
      <AuthorsGradient />
    </Layout>
  );
};

export default ArticlesPage;

const AuthorsGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${(p) => p.theme.colors.gradient};
  transition: ${(p) => p.theme.colorModeTransition};
`;

const AuthorPaginator = styled.div`
  text-align: center;
`;
