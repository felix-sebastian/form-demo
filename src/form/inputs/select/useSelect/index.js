import useSearcher from "./useSearcher";
import useCursor from "./useCursor";
import useQuery from "./useQuery";

export default (options, handleChange, value, required) => {
  const searcher = useSearcher(options);

  const {
    input,
    focused,
    select,
    focus,
    blur,
    search,
    setQuery,
    query,
    results
  } = useQuery(options, handleChange, searcher);

  const { cursor, setCursor } = useCursor(
    results.length,
    focused,
    select,
    value,
    required
  );

  return {
    input,
    focused,
    setQuery,
    cursor,
    query,
    focus,
    blur,
    setCursor,
    select,
    search,
    results
  };
};
