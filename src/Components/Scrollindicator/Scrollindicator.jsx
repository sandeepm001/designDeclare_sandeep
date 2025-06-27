import { useEffect, useState } from "react";
import "./Scrollindicator.css";

export default function Scrollindicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // ① pick the element that actually scrolls
    const scroller = document.querySelector(".app-container") || window;

    const onScroll = () => {
      const scrollTop = scroller === window
        ? window.scrollY || document.documentElement.scrollTop
        : scroller.scrollTop;

      const totalScrollable = (scroller === window
        ? document.documentElement.scrollHeight - window.innerHeight
        : scroller.scrollHeight - scroller.clientHeight);

      setProgress(totalScrollable > 0 ? scrollTop / totalScrollable : 0);
    };

    onScroll();                                 // run once
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="scroll-bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
