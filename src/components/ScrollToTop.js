import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Attempt to find the element by ID.
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If navigating from another page, the element might not be rendered yet
        // when the hash is first processed.
        // Scroll to the top of the new page first.
        window.scrollTo(0, 0);
        // Then, after a short delay, try to scroll to the element.
        const timer = setTimeout(() => {
          const el = document.getElementById(hash.substring(1));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Adjust delay if necessary, 100ms is usually sufficient.
        
        // Cleanup the timer if the component unmounts or dependencies change.
        return () => clearTimeout(timer);
      }
    } else {
      // If there's no hash, scroll to the top of the page.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Re-run this effect if the pathname or hash changes.

  return null;
}

export default ScrollToTop; 