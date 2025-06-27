// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Returns the first ancestor that can scroll vertically.
 * If none is found, we fall back to `window`.
 */
function findScrollParent(startSelector) {
  let el = document.querySelector(startSelector);

  // Walk up the DOM until <body>
  while (el && el !== document.body) {
    const style = getComputedStyle(el);
    if (/(auto|scroll)/.test(style.overflowY)) return el;
    el = el.parentElement;
  }
  return window;
}

export default function ScrollToTop({ rootSelector = ".app-container" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const scroller = findScrollParent(rootSelector);

    if (scroller instanceof HTMLElement) {
      scroller.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } else {
      // fallback to window
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, rootSelector]);

  return null; // renders nothing
}
