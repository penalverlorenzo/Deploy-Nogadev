/* eslint-disable no-undef */
import { useEffect } from 'react';

export const GoogleScripts = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');
    const script3 = document.createElement('script');
    
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16535222825';
    script1.async = true;
    document.body.appendChild(script1);
    script2.src = 'https://www.googletagmanager.com/gtag/js?id=G-YJD660BYT5';
    script2.async = true;
    document.body.appendChild(script2);
    script3.src = 'https://www.googletagmanager.com/gtag/js?id=G-16VSH8QX0Z';
    script3.async = true;
    document.body.appendChild(script3);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'AW-16535222825');
    gtag('config', 'G-YJD660BYT5');
    gtag('config', 'G-16VSH8QX0Z');
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return null;
};
