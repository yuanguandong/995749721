import styled from "styled-components";

export const SideMenuContainer = styled.div`
  flex: 6;
  min-width: 200px;

  height: 100vh;
  position: sticky;
  top: 0;
  border-right: 1px solid rgba(128, 128, 128, 0.2);
  overflow-y: auto;
  background: ${(p) => p.theme.colors.background};
  transition: ${(p) => p.theme.colorModeTransition};

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  
  @media (max-width: 1300px) {
    position: fixed;
    top: 0;
    left: 0;
  }

`;
