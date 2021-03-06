import { Link } from "gatsby";
import styled from "styled-components";

export const SearchBox = styled.div<{ readonly open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  width: 400px;
  background-color: #fff;
  left: -325px;
  top: -7px;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.03), 0 3px 46px rgba(0, 0, 0, 0.1);

  // &::before {
  //   content: " ";
  //   display: block;
  //   width: 16px;
  //   height: 16px;
  //   background-color: #fff;
  //   position: absolute;
  //   top: -8px;
  //   right: 38px;
  //   transform: rotate(45deg);

  //   @media (max-width: 735px) {
  //     right: 17px;
  //   }
  // }

  @media (max-width: 735px) {
    width: calc(100vw - 20px);
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 10;
    box-shadow: rgb(0 0 0 / 90%) 0px 0px 1px 2000px;
  }
`;

export const SearchInputWrap = styled.div`
  background-color: #fff;
  display: block;
  width: 100%;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  border: 0;
  padding: 15px;
  outline: none;
  flex: 1;
`;

export const SearchClose = styled.div`
  width: 55px;
  height: 55px;
  color: rgba(128, 128, 128, 0.65);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    background: rgba(128, 128, 128, 0.2);
  }
  &:active {
    transition: all 0.3s;
    background: rgba(128, 128, 128, 0.5);
  }
`;

export const ResultsTitle = styled.h5`
  padding: 5px 15px;
  background-color: #000;
  margin: 0;
  color: #fff;
`;

export const SearchResults = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 50vh;
  overflow-y: auto;
  white-space: pre-wrap;
`;

export const SearchResult = styled.li<{ selected: boolean }>`
  line-height: 1.4em;

  ${(props) =>
    props.selected &&
    `
    background-color: #f2f2f2;
  `};
`;

export const ResultLink = styled(Link)`
  display: block;
  padding: 15px;
  color: #000;
`;
export const ResultTitle = styled.h4`
  margin: 0;
`;
