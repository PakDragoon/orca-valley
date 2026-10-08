import React, { useEffect, useRef, useState } from "react";

const SECTIONS = [
  ["top", "Surface"],
  ["services", "Services"],
  ["process", "Process"],
  ["work", "Work"],
  ["stack", "Stack"],
  ["contact", "Contact"],
];
const MAX_DEPTH = 1800; // metres shown at the bottom of the page

// Fixed depth gauge on desktop: shows scroll depth and doubles as section navigation.
export default function DepthGauge() {
  const [depth, setDepth] = useState(0);
  const [current, setCurrent] = useState(0);
  const [needleTop, setNeedleTop] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const els = SECTIONS.map(([id]) => document.getElementById(id));

    const update = () => {
      ticking = false;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const f = Math.min(1, Math.max(0, window.scrollY / max));
      setDepth(Math.round(f * MAX_DEPTH));
      if (listRef.current) setNeedleTop(f * (listRef.current.offsetHeight - 12));

      const probe = window.innerHeight * 0.4;
      let cur = 0;
      els.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= probe) cur = i;
      });
      setCurrent(cur);

      // gauge colour follows the water colour behind it
      const mid = window.innerHeight / 2;
      let tone = "light";
      els.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) tone = el.dataset.tone || "light";
      });
      document.documentElement.setAttribute("data-tone", tone);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <aside className="gauge" aria-label="Page sections">
      <div className="reading" aria-hidden="true">
        <b>{depth.toLocaleString("en-US")}</b>
        <span>m</span>
      </div>
      <div className="rail" ref={listRef}>
      <ol>
        {SECTIONS.map(([id, label], i) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={i === current ? "true" : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ol>
      <span className="needle" style={{ top: needleTop }} aria-hidden="true" />
      </div>
    </aside>
  );
}
