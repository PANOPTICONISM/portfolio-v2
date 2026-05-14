import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isDesktop: width >= 1200,
    isMobile: width < 700,
  };
};

export default useScreenSize;
