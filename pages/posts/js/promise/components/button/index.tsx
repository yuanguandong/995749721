
import React from "react";

export default () => {
  const handleClick = () => {
    alert(1);
  };
  return (
    <div className={"code-container"}>
      <button className={"Button"} onClick={handleClick}>
        测试
      </button>
    </div>
  );
};
