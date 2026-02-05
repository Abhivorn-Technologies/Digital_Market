import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            const timer = setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
