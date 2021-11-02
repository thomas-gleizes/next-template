import { useCallback, useEffect, useState } from "react";

const useScrollPercent = () => {
  const [percent, setPercent] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight;
    const windowHeight = window.innerHeight;

    setPercent((scrollTop / (documentHeight - windowHeight)) * 100);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return percent;
};

export default useScrollPercent;
