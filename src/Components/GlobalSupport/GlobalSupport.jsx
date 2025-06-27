import React, { useState, useEffect, useRef } from 'react';
import './GlobalSupport.css';
import globalSupportData from '../Assets/globalsupport_data';

const isCountry = (name) =>
  /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/.test(name) &&
  !name.includes('.') &&
  name.length < 30;

const GlobalSupport = () => {
  const flatData = globalSupportData.flatMap(entry => [
    entry.country,
    ...entry.names
  ]);

  const totalEntries = flatData.length;
  const columnCount = 6;
  const itemsPerCol = Math.ceil(totalEntries / columnCount);
  const columns = Array.from({ length: columnCount }, (_, i) =>
    flatData.slice(i * itemsPerCol, (i + 1) * itemsPerCol)
  );

  const columnGroups = [columns.slice(0, 3), columns.slice(3)];

  // Scroll animation logic
  const countRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1000; // ms
    const increment = Math.ceil(totalEntries / (duration / 16.6));

    const step = () => {
      start += increment;
      if (start >= totalEntries) {
        setCount(totalEntries);
        return;
      }
      setCount(start);
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [visible, totalEntries]);

  return (
    <div className="global-support scroll-fade-up">
      <p className="count" ref={countRef}>#{count}</p>
      <div className="signatories-sub">
        <span className="signatories-top">Global Supporters</span>
      </div>
      <div className="column-set">
        {columnGroups.flat().map((col, colIdx) => (
          <div className="column" key={`col-${colIdx}`}>
            {col.map((entry, idx) => (
              <div
                key={`entry-${colIdx}-${idx}`}
                className={`entry ${isCountry(entry) ? 'country-name' : ''}`}
              >
                {entry}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalSupport;
