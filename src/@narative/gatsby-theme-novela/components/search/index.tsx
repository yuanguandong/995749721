import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Search } from "./search";

const Comp = (props) => (
  <StaticQuery
    // query={graphql`
    //   query SearchIndexQuery {
    //     siteSearchIndex {
    //       index
    //     }
    //   }
    // `}
    query={graphql`
      query SearchIndexQuery {
        allMdx {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              excerpt
              slug
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <Search
          searchIndex={data.allMdx.nodes}
          {...props}
          // searchIndex={data.siteSearchIndex.index}
        />
      );
    }}
  />
);

export default Comp;
