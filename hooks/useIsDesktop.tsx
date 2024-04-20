import { useEffect, useState } from "react";

const useIsDesktop = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" && window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width >= 1200);
}

export default useIsDesktop;