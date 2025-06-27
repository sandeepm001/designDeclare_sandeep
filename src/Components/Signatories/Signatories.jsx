import React ,{useState,useEffect,useRef} from 'react'
import './Signatories.css';
import sign_data from '../Assets/signatories_data';


const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Signatories = () => {
  const totalColumns = 6;
  const namesPerColumn = 87;

  const columns = chunkArray(sign_data, namesPerColumn); // gives 6 arrays

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
    const end = sign_data.length;
    const duration = 1000; // milliseconds
    const increment = Math.ceil(end / (duration / 16.6)); // approx 60fps
    const step = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(start);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible]);

  return (
    <div className="signatories-wrapper scroll-fade-up">
      <p className="count" ref={countRef}>#{count}</p>
      <div className="signatories-sub">
        <span className="signatories-top">Signatories and counting in</span>
        <span className="badge">D! UK</span>
      </div>

      <div className="signatories-columns">
        {/* Split into 2 sets of 3 columns each */}
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="column-set">
            {columns.slice(setIndex * 3, setIndex * 3 + 3).map((group, idx) => (
              <div key={idx} className="column">
                {group.map((name, i) => (
                  <p key={i}>{name}</p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Signatories;
