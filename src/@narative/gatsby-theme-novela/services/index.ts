const randomNum = (n, m) => {
  const num1 = Math.random() * (m - n + 1);
  const num2 = Math.floor(num1);
  return num2 + n;
};

export const randomMotto = () => {
  return data[randomNum(0, data.length - 1)]["content"];
};

const data = [
  {
    author: "重剑",
    content: "重剑无锋，大巧不工。",
  },
  {
    author: "庄子",
    content: "鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。",
  },
  {
    author: "庄子",
    content: "朝菌不知晦朔，蟪蛄不知春秋。",
  },
  {
    author: "庄子",
    content: "朝菌不知晦朔，蟪蛄不知春秋。",
  },
  {
    author: "庄子",
    content:
      "吾生也有涯，而知也无涯。以在涯随无涯，殆已；已而为知者，殆而已矣。",
  },
  {
    author: "佚名",
    content: "Constant dropping wears the stone",
  },
  {
    author: "佚名",
    content: "A good medicine tasks bitter",
  },
  {
    author: "佚名",
    content: "It is never too late to learn",
  },
  {
    author: "佚名",
    content: "种一棵树最好的时间是十年前，其次是现在！",
  },
  {
    author: "乔布斯",
    content: "拥有初学者的心态是件了不起的事情",
  },
  {
    author: "乔布斯",
    content: "活着就是为了改变世界，难道还有其他原因吗？",
  },
  {
    author: "乔布斯",
    content: "你的时间有限，所以不要为别人而活。",
  },
  {
    author: "乔布斯",
    content: "不要被教条所限，不要活在别人的观念里。",
  },
  {
    author: "乔布斯",
    content: "不要让别人的意见左右自己内心的声音。",
  },
  {
    author: "乔布斯",
    content: "最重要的是，勇敢的去追随自己的心灵和直觉，只有自己的心灵和直觉才知道你自己的真实想法，其他一切都是次要。",
  },
  {
    author: "乔布斯",
    content: "求知若渴，虚心若愚",
  },
  {
    author: "乔布斯",
    content: "简单比复杂更难：你必须付出巨大艰辛，化繁为简。",
  },
  {
    author: "乔布斯",
    content: "牢记自己即将死去，这是避免陷入患得患失困境的最好方法。一无所有，就没有理由不听从自己的心声",
  },
  {
    author: "诸葛亮",
    content: "善战者不怒，善胜者不惧。",
  },
  
  
];


