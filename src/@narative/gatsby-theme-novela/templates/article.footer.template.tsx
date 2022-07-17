import React from "react";
// import "gitalk/dist/gitalk.css";
import GitalkComponent from "gitalk/dist/gitalk-component";
import "./gitalk.css"
// import Subscription from "@components/Subscription";

// import { Template } from "@types";

const ArticleFooter = ({ pageContext }) => {
  const { article, mailchimp } = pageContext;
  console.log("article", article);
  return (
    <>
      <GitalkComponent
        options={{
          clientID: "9a1d1d842995b8bd8f79",
          clientSecret: "6fda9f068656d0916efe20f3bcb6034a85548b58",
          repo: "blog-comments",
          owner: "yuanguandong",
          admin: ["yuanguandong"],
          id: article?.slug,
        }}
      />
    </>
  );
};

/* {mailchimp && article.subscription && <Subscription />} */

export default ArticleFooter;
