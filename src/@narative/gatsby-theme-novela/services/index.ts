import Motto from '../../../../static/motto';

const randomNum = (n, m) => {
  const num1 = Math.random() * (m - n + 1);
  const num2 = Math.floor(num1);
  return num2 + n;
};

export const randomMotto = () => {
  return Motto[randomNum(0, Motto.length - 1)]["content"];
};


