import { useState, useEffect } from "react";

const useMatchMedia = (mediaQuery: string) => {
  const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleMatchChange = (e: any) => {
      setMatches(e.matches);
    };

    mediaQueryList.addListener(handleMatchChange);

    return () => {
      mediaQueryList.removeListener(handleMatchChange);
    };
  }, [mediaQuery]);

  return matches;
};

export default useMatchMedia;
