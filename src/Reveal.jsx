import { createElement, useEffect, useRef, useState } from "react";

// Fades and lifts its children into place the first time they scroll into view.
export default function Reveal({ as: tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    tag,
    { ref, "data-shown": shown, className: `reveal ${className}`, style: { "--d": `${delay}ms` }, ...rest },
    children,
  );
}
