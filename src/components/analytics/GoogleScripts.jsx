import { useEffect } from 'react';

export const GoogleScripts = () => {
  useEffect(() => {
    const addScript = (src, innerHTML = '') => {
      const script = document.createElement('script');
      script.async = true;
      script.src = src;
      if (innerHTML) script.innerHTML = innerHTML;
      document.head.appendChild(script);
      return script;
    };

    const script1 = addScript('https://www.googletagmanager.com/gtag/js?id=AW-16535222825');
    const script2 = addScript('', `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'AW-16535222825');
    `);
    const script3 = addScript('https://www.googletagmanager.com/gtag/js?id=G-YJD660BYT5');
    const script4 = addScript('', `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-YJD660BYT5');
    `);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
      document.head.removeChild(script4);
    };
  }, []);

  return null;
};

export default GoogleScripts;
