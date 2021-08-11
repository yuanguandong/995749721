import styled from "@emotion/styled";
import list from "@utils/music";
import React, { useEffect, useState } from "react";
import { FaBars, FaMusic } from "react-icons/fa";

export default (props: any) => {
  const { id = "29460377", auto = false, hasList = false } = props;
  const [idState, setIdState] = useState(id);
  const [autoState, setAutoState] = useState(auto);
  const [listShow, setListShow] = useState(false);

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

  return (
    <Music>
      {hasList && (
        <MusicList show={listShow}>
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
        </MusicList>
      )}

      <div
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
      </div>
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

const MusicList = styled.div<{ show }>`
  overflow-y: auto;
  border-radius: 10px 10px 0 0;
  @media (max-width: 680px) {
    border-radius: 20px 20px 0 0;
  }
  background: linear-gradient(
    to right,
    #f78ca0 0%,
    #f9748f 19%,
    #fd868c 60%,
    #fe9a8b 100%
  );
  color: #fff;
  padding: ${(p) => (p.show ? "10px" : "0px")};
  box-shadow: inset 0 -5px 5px rgb(238, 84, 75, 0.4);
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  user-select: none;
  transition: all 0.2s;
  max-height: ${(p) => (p.show ? "50vh" : "0px")};
  height: ${(p) => (p.show ? "auto" : "0")};
`;
