import { useEffect, useRef } from 'react';

import styles from './index.module.css';

export const useNavbarUtility = () => {
  const navbarRef = useRef<HTMLElement | null>(null);

  const slideNavbar = () => {
    if (navbarRef) {
      const ref = navbarRef.current as HTMLElement;
      if (window.scrollY > 0) {
        ref.classList.add(styles.slideUp);
      } else {
        ref.classList.remove(styles.slideUp);
      }
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', slideNavbar);
    }

    return () => {
      window.removeEventListener('scroll', slideNavbar);
    };
  }, []);

  return {
    navbarRef,
  };
};
