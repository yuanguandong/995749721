import React from "react";
import {
  FaBuyNLarge,
  FaCss3Alt,
  FaEllipsisH,
  FaGlobe,
  FaJira,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaSlack,
  FaCalculator,
  FaGrinAlt,
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
  "engin": {
    name: "工程化",
    order: 6,
    icon: <FaSlack />,
  },
  algo: {
    name: "算法",
    order: 7,
    icon: <FaCalculator />,
  },
  network: {
    name: "网络",
    order: 8,
    icon: <FaGlobe />,
  },
  life: {
    name: "Life",
    order: 9,
    icon: <FaGrinAlt/>,
  },
  other: {
    name: "其他",
    order: 10,
    icon: <FaEllipsisH />,
  },
};
