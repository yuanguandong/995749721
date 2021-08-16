import styled from "@emotion/styled";
import React from "react";
import { useColorMode } from "theme-ui";

const npms = [
  {
    name: "React Keyevent",
    homepage: "https://yuanguandong.github.io/react-keyevent",
    img: "https://user-images.githubusercontent.com/13197560/125153789-c44b4080-e188-11eb-829e-307a738ad92b.png",
  },
  {
    name: "Smart Background",
    homepage: "https://yuanguandong.github.io/smart-background/",
    img: "https://github.com/yuanguandong/smart-background/raw/master/snapshot.png",
  },
];

export const NpmList = (props) => {
  const [colorMode] = useColorMode();

  return (
    <NpmListContainer >
      {npms.map((item) => (
        <Npm href={item.homepage} target="_blank" img={item.img}>
          <div className="npmname">{item.name}</div>
        </Npm>
      ))}
    </NpmListContainer>
  );
};

const NpmListContainer = styled.a<{}>`
width:100%;
  margin-top:100px;
`


const Npm = styled.a<{img:string}>`
  width:calc(50% - 10px);
  height: 200px;
  display:block;
  border-radius:10px;
  float:left;
  margin-right:10px;
  // color: ${(p) => p.theme.colors.primary};
  color:#fff;
  font-weight:bold;
  font-size:3rem;
  background-image:url(${(p) => p.img});
  background-size: cover;
  background-position:center;
  position: relative;
  
  .npmname {
    display: flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    text-align: center;
    color:#fff;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.9);
    transition: all 0.3s;
    &:hover{
      transition: all 0.3s;
      background:rgba(0,0,0,0.7);
    }
  }
`;
