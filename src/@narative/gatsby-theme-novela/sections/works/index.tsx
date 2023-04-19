import styled from "@emotion/styled";
import React from "react";
import { FaNpm } from "react-icons/fa";
import { useColorMode } from "theme-ui";
import { BsPersonWorkspace } from "react-icons/bs";
const dataSource = [
  {
    name: "webgl-3d-text",
    homepage: "https://webgl-3d-text-five-hazel.vercel.app/",
    img: "https://raw.githubusercontent.com/yuanguandong/resources/master/favori/webgl-3d-text.png",
  },
];

export const Works = (props) => {
  const [colorMode] = useColorMode();

  return (
    <>
      <BsPersonWorkspace
        style={{
          marginTop: 100,
          marginBottom: 50,
          fontSize: 48,
          color: colorMode === "dark" ? "#fff" : "#000",
        }}
      />
      <NpmListContainer>
        {dataSource.map((item) => (
          <Npm href={item.homepage} target='_blank' img={item.img}>
            <div className='npmname'>{item.name}</div>
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
