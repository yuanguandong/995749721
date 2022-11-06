import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Blockquote = styled.blockquote`
  transition: ${p => p.theme.colorModeTransition};
  margin: 15px 12px;
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.serif};
  font-style: italic;

  ${mediaqueries.tablet`
    margin: 10px 12px;
  `};

  & > p {
    font-family: ${p => p.theme.fonts.serif};
    max-width: 680px !important;
    padding-right: 100px;
    padding-bottom: 0;
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.32;
    font-weight: bold;
    border-left: 3px solid rgba(128,128,128,1);
    padding-left: 20px;
    color: rgba(128,128,128,1);
    ${mediaqueries.tablet`
      font-size: 26px;
      padding: 0 180px;
    `};

    ${mediaqueries.phablet`
      font-size: 16px;
      padding: 0 20px 0 40px;
    `};
  }
`;

export default Blockquote;
