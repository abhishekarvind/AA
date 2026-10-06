import { useEffect, useRef } from "react";

const MAX_DIST = 220;

// Headline whose letters pinch (lighter and narrower) as the pointer passes over them,
// then spring back to full weight. Uses the variable font's weight and width axes.
export default function FluidName({ lines, accent }) {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const letters = [...el.querySelectorAll("[data-l]")];
    const zone = el.closest("section") ?? el;

    const set = (node, t) => {
      node.style.fontVariationSettings = `"wght" ${Math.round(800 - 400 * t)}, "wdth" ${Math.round(100 - 25 * t)}`;
    };
    const onMove = (e) => {
      for (const l of letters) {
        const r = l.getBoundingClientRect();
        const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
        set(l, Math.max(0, 1 - d / MAX_DIST) ** 1.5);
      }
    };
    const onLeave = () => letters.forEach((l) => set(l, 0));

    zone.addEventListener("pointermove", onMove);
    zone.addEventListener("pointerleave", onLeave);
    return () => {
      zone.removeEventListener("pointermove", onMove);
      zone.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <h1 ref={root} aria-label={lines.join(" ")} className="font-display text-[clamp(3.6rem,min(15vw,25vh),14rem)] font-extrabold leading-[0.84] tracking-[-0.04em]">
      {lines.map((line) => (
        <span key={line} className="block" aria-hidden="true">
          {[...line].map((ch, i) => (
            <span
              key={i}
              data-l
              className={`inline-block transition-[font-variation-settings] duration-300 ease-out ${accent === `${line}:${i}` ? "text-accent" : ""}`}
              style={{ fontVariationSettings: '"wght" 800, "wdth" 100' }}
            >
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
