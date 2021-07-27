import { Button } from "antd";
import React from "react";
import "./index.less";

export default () => {
  const handleClick = () => {
    alert(1);
  };
  return (
    <div className={"code-container"}>
      <Button className={"Button"} onClick={handleClick}>
        测试
      </Button>
    </div>
  );
};
