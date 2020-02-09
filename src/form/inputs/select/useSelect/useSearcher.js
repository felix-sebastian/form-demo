import { useEffect, useState } from "react";
import Fuse from "fuse.js";

export default options => {
  const [searcher, setSearcher] = useState(null);

  useEffect(() => {
    if (!options) return;

    setSearcher(
      new Fuse(
        options.map(option => ({ text: option })),
        { keys: ["text"], id: "text", threshold: 0.2 }
      )
    );
  }, [options]);

  return searcher;
};
