import React from "react";
import {
  FaBuyNLarge, FaCss3Alt, FaEllipsisH, FaJira, FaJsSquare, FaNodeJs, FaReact, FaSlack
} from "react-icons/fa";

export default {
  js: {
    name: "JavaScript",
    order: 1,
    icon: <FaJsSquare />,
  },
  react: {
    name: "React",
    order: 2,
    icon: <FaReact />,
  },
  css: {
    name: "CSS",
    order: 3,
    icon: <FaCss3Alt />,
  },
  ts: {
    name: "TypeScript",
    order: 4,
    icon: <FaJira />,
  },
  nodejs: {
    name: "NodeJS",
    order: 5,
    icon: <FaNodeJs />,
  },
  babel: {
    name: "编译原理",
    order: 6,
    icon: <FaBuyNLarge />,
  },
  "micro-frontend": {
    name: "微前端",
    order: 7,
    icon: <FaSlack />,
  },
  other: {
    name: "其他",
    order: 8,
    icon: <FaEllipsisH />,
  },
};
