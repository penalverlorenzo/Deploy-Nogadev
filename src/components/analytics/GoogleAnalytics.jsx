/* eslint-disable no-undef */
import { useEffect } from 'react';

export const GoogleAnalytics = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-S1L6YBTM99';
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-S1L6YBTM99');

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};