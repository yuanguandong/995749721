import styled from "@emotion/styled";
import React from "react";
import { FaNpm } from "react-icons/fa";
import { useColorMode } from "theme-ui";

const npms = [
  {
    name: "React Dashboard Pro",
    homepage: "https://yuanguandong.github.io/react-dashboard-pro",
    img: "https://github.com/yuanguandong/react-dashboard-pro/raw/master/snapshot.png",
  },
  {
    name: "Smart Background",
    homepage: "https://yuanguandong.github.io/smart-background/",
    img: "https://github.com/yuanguandong/smart-background/raw/master/snapshot.png",
  },
  {
    name: "React Keyevent",
    homepage: "https://yuanguandong.github.io/react-keyevent",
    img: "https://user-images.githubusercontent.com/13197560/125153789-c44b4080-e188-11eb-829e-307a738ad92b.png",
  }
  
];

export const NpmList = (props) => {
  const [colorMode] = useColorMode();

  return (
    <>
      <FaNpm
        style={{
          marginTop:100,
          fontSize: 64,
          color: colorMode === "dark" ? "#fff" : "#000",
        }}
      />
      <NpmListContainer>
        {npms.map((item) => (
          <Npm href={item.homepage} target="_blank" img={item.img}>
            <div className="npmname">{item.name}</div>
          </Npm>
        ))}
      </NpmListContainer>
    </>
  );
};

const NpmListContainer = styled.a<{}>`
  width: 100%;
  margin-top: 10px;
`;

const Npm = styled.a<{ img: string }>`
  width: calc(50% - 10px);
  height: 200px;
  display: block;
  border-radius: 10px;
  transform:translateX(5px);
  float: left;
  margin-right: 10px;
  // color: ${(p) => p.theme.colors.primary};
  color: #fff;
  font-weight: bold;
  font-size: 3rem;
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow:hidden;
  margin-bottom:10px;
  .npmname {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    text-align: center;
    color: #fff;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    transition: all 0.3s;
    &:hover {
      transition: all 0.3s;
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;
