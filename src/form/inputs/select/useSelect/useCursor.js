import { useEffect, useState } from "react";

export default (optionCount, focused, select, value, required) => {
  const [cursor, setCursor] = useState(null);
  useEffect(() => setCursor(value), [setCursor, focused, optionCount, value]);

  useEffect(() => {
    const handle = event => {
      if (!focused) return;
      const min = required ? 0 : -1;

      if (event.keyCode === 38) {
        event.preventDefault();

        cursor !== null && cursor > min
          ? setCursor(cursor - 1)
          : setCursor(optionCount - 1);
      }

      if (event.keyCode === 40) {
        event.preventDefault();

        cursor !== null && cursor < optionCount - 1
          ? setCursor(cursor + 1)
          : setCursor(min);
      }
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [focused, cursor, setCursor, optionCount, required]);

  useEffect(() => {
    const handle = event => {
      if (focused && event.keyCode === 13) select(cursor);
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [focused, select, cursor]);

  return { cursor, setCursor };
};
