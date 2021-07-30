import Headings from '@components/Headings';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';
import { IArticle } from '@types';
import { Link } from 'gatsby';
import _ from 'lodash';
import React from 'react';




interface ArticlesListItemProps {
  article: IArticle;
  narrow?: boolean;
}



const gridLayout ='rows'

export const ListItem: React.FC<ArticlesListItemProps> = ({ article, narrow }) => {
  if (!article) return null;


  const hasOverflow = narrow && article.title.length > 35;
  const imageSource = _.get(article,'hero.full.fluid.src')

  return (
    <ArticleLink to={article.slug} data-a11y="false">
      <Item gridLayout={gridLayout}>
        <ImageContainer narrow={narrow} gridLayout={gridLayout}>
          {(imageSource && !narrow) ? <Image style={{backgroundImage:`url(${imageSource})`}}/> : null}
        </ImageContainer>
        <div style={{paddingLeft:10}}>
          <Title dark hasOverflow={hasOverflow} gridLayout={gridLayout}>
            {article.title}
          </Title>
          <Excerpt
            narrow={narrow}
            hasOverflow={hasOverflow}
            gridLayout={gridLayout}
          >
            {article.excerpt}
          </Excerpt>
          <MetaData>
            {article.date} · {article.timeToRead} min read
          </MetaData>
        </div>
      </Item>
    </ArticleLink>
  );
};

export const Image = styled.div`
  width:100px;
  height:100px;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center center;
  border-radius:3px;
  @media (max-width: 1300px) {
    display:none;
    
  }
`;


// If only 1 article, dont create 2 rows.
const listRow = p => css`
  // display: grid;
  // grid-template-rows: ${p.hasOnlyOneArticle ? '1fr' : '1fr 1fr'};
`;

export const List = styled.div<{
  reverse: boolean;
  gridLayout: string;
  hasOnlyOneArticle: boolean;
}>`
  // padding:10px;
  ${listRow}
`;

const Item = styled.div<{ gridLayout: string }>`
  ${p => (listItemRow)}
`;













const wide = '1fr';
const narrow = '457px';

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;

const showDetails = css`
  p {
    display: -webkit-box;
  }

  h2 {
    margin-bottom: 10px;
  }
`;



const listItemRow = p => css`
  display:flex;
  
  position: relative;
  margin: 10px;
  padding: 10px 10px 0 10px;
  border-top:1px solid rgba(128,128,128,0.2);

  ${mediaqueries.desktop`
    
  
  `}

  ${mediaqueries.tablet`
    
  `}

  @media (max-width: 540px) {
    background: ${p.theme.colors.card};

  }

  ${mediaqueries.phablet`
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  `}
`;







const ImageContainer = styled.div<{ narrow: boolean; gridLayout: string }>`
  position: relative;
  height: 100px;
  
  margin-bottom: ${p => (p.gridLayout === 'tiles' ? '30px' : 0)};

  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);

  & > div {
    height: 100%;
  }

  ${mediaqueries.tablet`
    height: 100px;
    margin-bottom: 35px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: none;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  `}
`;

const Title = styled(Headings.h2)`
  font-size: 21px;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: ${p =>
    p.hasOverflow && p.gridLayout === 'tiles' ? '35px' : '10px'};
  transition: color 0.3s ease-in-out;
  ${limitToTwoLines};

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;  
  `}

  ${mediaqueries.phablet`
    font-size: 22px;  
    padding: 30px 20px 0;
    margin-bottom: 10px;
    -webkit-line-clamp: 3;
  `}
`;

const Excerpt = styled.p<{
  hasOverflow: boolean;
  narrow: boolean;
  gridLayout: string;
}>`
  ${limitToTwoLines};
  font-size: 16px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.grey};
  display: ${p => (p.hasOverflow && p.gridLayout === 'tiles' ? 'none' : 'box')};
  max-width: ${p => (p.narrow ? '415px' : '515px')};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    margin-bottom: 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;

const MetaData = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${p => p.theme.colors.grey};
  opacity: 0.33;

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px 30px;
  `}
`;

const ArticleLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover ${ImageContainer}, &:focus ${ImageContainer} {
    transform: translateY(-1px);
    box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.27),
      0 30px 50px -30px rgba(0, 0, 0, 0.3);
  }

  &:hover h2,
  &:focus h2 {
    color: ${p => p.theme.colors.accent};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;
