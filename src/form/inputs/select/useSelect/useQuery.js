import { useState, useRef, useEffect } from "react";

export default (options, handleChange, searcher) => {
  const [focused, setFocused] = useState(false);
  const input = useRef();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(options);

  useEffect(() => {
    setResults(options);
  }, [options]);

  const select = i => {
    handleChange(query ? options.indexOf(results[i]) : i);
    reset();
    input.current && input.current.blur();
  };

  const focus = event => {
    setFocused(true);
    event.preventDefault();
    input.current.focus();
    window.setTimeout(() => input.current.setSelectionRange(0, 0), 0);
  };

  const blur = () => {
    setFocused(false);
    reset();
  };

  const reset = () => {
    setQuery("");
    setResults(options);
  };

  const search = query => {
    setQuery(query);
    setResults(query ? searcher.search(query) : options);
  };

  return {
    input,
    focused,
    select,
    focus,
    blur,
    search,
    setQuery,
    query,
    results
  };
};
