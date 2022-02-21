import styled from "@emotion/styled";
import { useLocalStorageState } from "ahooks";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { FaBars, FaMusic } from "react-icons/fa";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import Keyevent from "react-keyevent";
// import Background from 'smart-background';
import list from "../../../../../static/music";
import Background from "./src";
import _ from 'lodash';

export default (props: any) => {
  const { id = "29460377", auto = false, hasList = false } = props;
  const [idState, setIdState] = useState(id);
  const [autoState, setAutoState] = useState(auto);
  const [listShow, setListShow] = useLocalStorageState("musicListShow", false);

  const iframeRef = useRef<any>();

  const check = (id) => {
    setIdState(id);
    setAutoState(true);
  };

  useEffect(() => {
    setIdState(id);
    setAutoState(auto);
  }, [id, auto]);

  const toggleMusicList = () => {
    setListShow(!listShow);
  };

  const onSpace = () => {
    setAutoState(!autoState);
  };

  // useLayoutEffect(() => {
  //   if(_.isEmpty(iframeRef.current)){return}
  //   const childDocument = iframeRef.current.contentWindow
  //   if(childDocument){
  //     console.log('childDocument',childDocument)
  //     // childDocument.body.style.backgroundColor = 'red'
  //   }
  // }, []);

  return (
    <Music className="Music">
      {hasList && (
        <MusicList show={listShow}>
          <Background
            symbols={[<RiNeteaseCloudMusicLine />]}
            exact
            symbolSize={300}
            symbolsStyle={{
              top: "-30%",
              left: "50%",
              opacity: "0.1",
            }}
            childrenWrapClassName={"hideScroller"}
            childrenWrapStyle={{
              padding: 10,
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                margin: "0 5px 10px 5px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <FaMusic /> 战歌
              </div>
              <div>{list.length}</div>
            </div>
            {list.map((item) => (
              <div
                key={item.id}
                onClick={() => check(item.id)}
                style={{
                  cursor: "pointer",
                  margin: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontSize: 14 }}>
                  {item.id === idState && (
                    <div
                      style={{
                        display: "inline-block",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
                        marginRight: "5px",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                  {item.name}
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
                  {item.author}
                </div>
              </div>
            ))}
          </Background>
        </MusicList>
      )}

      <Keyevent
        events={{
          onSpace,
        }}
        style={{
          width: "100%",
          height: 66,
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          // borderRadius: "10px 10px 0 0",
          // position: "relative"
          // borderRadius: 5,
        }}
      >
        <iframe
          className={"music-iframe"}
          frameBorder="no"
          marginWidth={0}
          marginHeight={0}
          width={"100%"}
          height={86}
          style={{
            width: "calc(100% + 20px)",
            margin: "-10px",
          }}
          src={`//music.163.com/outchain/player?type=2&id=${idState}&auto=${
            autoState ? 1 : 0
          }&height=66`}
          ref={iframeRef}
        />
        {hasList && (
          <div
            style={{
              width: 30,
              height: 30,
              background: "#fff",
              position: "absolute",
              right: 5,
              bottom: 30,
              textAlign: "center",
              lineHeight: "30px",
              cursor: "pointer",
            }}
            onClick={toggleMusicList}
          >
            <FaBars />
          </div>
        )}
      </Keyevent>
    </Music>
  );
};

const Music = styled.div<{}>`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  @media (max-width: 680px) {
    border-radius: 20px;
  }
`;

const MusicContent = styled.div<{}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: auto;
`;

const MusicList = styled.div<{ show }>`
  overflow-y: auto;
  border-radius: 10px 10px 0 0;
  @media (max-width: 680px) {
    border-radius: 20px 20px 0 0;
    height: ${(p) => (p.show ? "25vh" : "0px")};
  }

  position: relative;
  // &:after {
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   animation: change 10s alternate infinite;
  //   background-image: linear-gradient(
  //     to right,
  //     #f78ca0 0%,
  //     #f9748f 19%,
  //     #fd868c 60%,
  //     #fe9a8b 100%
  //   );
  //   z-index:-1;
  // }
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: change1 10s alternate infinite;
    // background-image: linear-gradient(to right, #ff0844 0%, #ffb199 100%);
    background-image: linear-gradient(90deg, #ff0844 0%, #ffb199 100%);
    z-index: -1;
    background-position: 0% 0%;
    background-attachment: fixed;
  }
  // #ff5858 70%,
  // #f09819 100%
  @keyframes change {
    from {
      // background-position: 0% 0%;
      background-size: 10%;
    }
    to {
      background-position: 40% 0%;
      background-size: 400%;
    }
  }
  @keyframes change1 {
    from {
      background-size: 400%;
    }
    to {
      background-size: 100%;
    }
  }
  color: #fff;
  padding: ${(p) => (p.show ? "10px" : "0px")};
  box-shadow: inset 0 -5px 5px rgb(238, 84, 75, 0.4);
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  user-select: none;
  transition: all 0.2s;
  height: ${(p) => (p.show ? "20vh" : "0px")};
  // height: ${(p) => (p.show ? "auto" : "0")};
`;
