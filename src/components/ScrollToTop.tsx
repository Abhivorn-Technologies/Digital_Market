import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Prevent browser from restoring previous scroll position on route change
        if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            // Immediately force scroll to top
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            document.documentElement.scrollTop = 0;
            if (document.body) {
                document.body.scrollTop = 0;
            }

            // Also run in requestAnimationFrame & slight timeout to handle dynamic DOM rendering
            const rAF = requestAnimationFrame(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.documentElement.scrollTop = 0;
                if (document.body) {
                    document.body.scrollTop = 0;
                }
            });

            const timer = setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.documentElement.scrollTop = 0;
                if (document.body) {
                    document.body.scrollTop = 0;
                }
            }, 60);

            return () => {
                cancelAnimationFrame(rAF);
                clearTimeout(timer);
            };
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
