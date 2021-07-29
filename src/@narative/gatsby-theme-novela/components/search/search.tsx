import { navigate } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  NavMenuItem, ToggleSearchButton
} from "../searchcontainer/style";
import {
  ResultLink, ResultsTitle,
  ResultTitle,
  SearchBox,
  SearchInput,
  SearchResult,
  SearchResults
} from "./style";
interface SearchResult {
  title: string;
  content: string;
  tags: string[];
  excerpt: string;
  path: string;
}

export const Search = (props: any) => {
  const { searchIndex } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultListRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const resultRefs: HTMLElement[] = [];

  const [index, setIndex] = useState<any>();

  // Responsible for closing the search dialog when clicked outside the search dialog
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // The actual search functionality
  // See https://www.gatsbyjs.org/packages/gatsby-plugin-lunr/
  // const search = (event) => {
  //   const input = event.target.value;
  //   if (!input || !(window as any).__LUNR__ || input === "") {
  //     setQuery(input);
  //     return setResults([]);
  //   }
  //   const lunrIndex = (window as any).__LUNR__["en"]; // tslint:disable-line
  //   console.log('lunrIndex',lunrIndex)
  //   setResults(
  //     lunrIndex.index.search(input + "*").map(({ ref }) => {
  //       return lunrIndex.store[ref]; // tslint:disable-line
  //     })
  //   );
  //   if (results.length > 0) {
  //     setSelected(0);
  //   }
  //   setQuery(input);
  // };

  console.log("searchIndex", searchIndex);

  // const getOrCreateIndex = () => (index ? index : Index.load(searchIndex));

  // const search = (event) => {
  //   const query = event.target.value;
  //   if (!query || query === "") {
  //     setQuery(query);
  //     return setResults([]);
  //   }
  //   const index = getOrCreateIndex()
  //   setIndex(index);
  //   console.log('index',index)

  //   const results = index
  //     .search(query, {})
  //     .map(({ ref }) => index.documentStore.getDoc(ref));

  //   setResults(results);
  //   if (results.length > 0) {
  //     setSelected(0);
  //   }
  //   setQuery(query);
  // };

  const search = (event) => {
    const query = event.target.value;
    if (!query || query === "") {
      setQuery(query);
      return setResults([]);
    }

    const results = [];

    searchIndex.forEach((item) => {
      let obj = item.frontmatter;
      for (let [key, val] of Object.entries(obj)) {
        if (val && val.includes(query)) {
          results.push(obj);
          break;
        }
      }
    });

    setResults(results);
    if (results.length > 0) {
      setSelected(0);
    }
    setQuery(query);
  };

  // Responsible for navigating to results on key presses
  const scrollToResult = (selectIndex) => {
    if (resultListRef.current && resultRefs[selectIndex]) {
      const current = resultRefs[selectIndex];
      resultListRef.current.scrollTop =
        current.offsetTop - resultListRef.current.offsetTop;
    }
  };

  // Key handling to enable key navigation (arrow keys, ...) within the search results
  const handleKey = (event) => {
    const currentSelection = results[selected];

    switch (event.key) {
      case "Escape":
        if (query === "") {
          return setIsOpen(false);
        }
        setSelected(0);
        setResults([]);
        return setQuery("");
      case "ArrowDown":
        event.preventDefault();
        scrollToResult(selected + 1);
        return setSelected(
          selected + 1 >= results.length ? selected : selected + 1
        );
      case "ArrowUp":
        event.preventDefault();
        scrollToResult(selected - 1);
        return setSelected(selected - 1 >= 0 ? selected - 1 : 0);
      case "PageDown":
        event.preventDefault();
        scrollToResult(
          selected + 5 <= results.length ? selected + 5 : selected
        );
        return setSelected(
          selected + 5 <= results.length ? selected + 5 : results.length - 1
        );
      case "PageUp":
        event.preventDefault();
        scrollToResult(selected - 5 > 0 ? selected - 5 : 0);
        return setSelected(selected - 5 > 0 ? selected - 5 : 0);
      case "Home":
        event.preventDefault();
        scrollToResult(0);
        return setSelected(0);
      case "End":
        event.preventDefault();
        scrollToResult(results.length - 1);
        return setSelected(results.length - 1);
      case "Enter":
        event.preventDefault();
        setIsOpen(false);
        navigate(`/${currentSelection.path}`);
        return;
    }
  };

  // Toggles the search dialog
  const toggleSearch = () => setIsOpen(!isOpen);
  console.log("results", results);
  return (
    <>
      <NavMenuItem>
        <ToggleSearchButton
          role={`button`}
          aria-label={`Toggle search`}
          onClick={toggleSearch}
        >
          <FaSearch />
        </ToggleSearchButton>
      </NavMenuItem>

      {isOpen && (
        <SearchBox open={isOpen} ref={searchRef}>
          <SearchInput
            placeholder={`搜索`}
            autoFocus={true}
            ref={inputRef}
            value={query}
            onChange={search}
            onKeyDown={handleKey}
          />
          <ResultsTitle>文章 ({results.length})</ResultsTitle>
          <SearchResults ref={resultListRef}>
            {results.map((item, index) => (
              <SearchResult
                onMouseOver={() => setSelected(index)} // tslint:disable-line
                key={index}
                ref={(ref) => {
                  if (ref) {
                    resultRefs[index] = ref;
                  }
                }}
                selected={index === selected}
              >
                <ResultLink to={item.slug ? item.slug : "/"}>
                  {/* {item.tags && <small>{item.tags.join(", ")}</small>} */}
                  <ResultTitle>{item.title}</ResultTitle>
                   {item.excerpt}
                </ResultLink> 
              </SearchResult>
            ))}
          </SearchResults>
        </SearchBox>
      )}
    </>
  );
};
