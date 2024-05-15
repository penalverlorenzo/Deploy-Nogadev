/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react';

const LazyImageLoader = ({ children }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imageRef} >
      {isIntersecting && children}
    </div>
  );
};

export default LazyImageLoader;